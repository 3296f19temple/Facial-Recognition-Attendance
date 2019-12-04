/* global window.localStorage */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import querystring from 'querystring';
import { Image, Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      email: '',
      username: '',
      password: '',
      signUpLogIn: 'Sign Up',
      loggedInUser: '',
      courseArray: [],
      studentArray: [],
      addingClass: 'No',
      viewClass: 'No',
      selectedCourse: null,
      courseId: '',
      studentCourseId: '',
      courseName: '',
      meetingSchedule: '',
      studentName: '',
      school_id: '',
      attendence: '',
      studentPicture: null,
      takingAttendance: 'No',
      attendanceCourseSelected: '',
      attendanceStudets: [{student: "", attendancePicture: null}],
      studentAttendanceList: [],


    };

    const d = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
    this.handleSubmitCreateClass = this.handleSubmitCreateClass.bind(this);
    this.handleViewClass = this.handleViewClass.bind(this, d);
    this.handleSubmitStudentClass = this.handleSubmitStudentClass.bind(this);
    this.onChangeFileUpload = this.onChangeFileUpload.bind(this);
    this.handleTakeAttendanceView = this.handleTakeAttendanceView.bind(this);
    this.addAttendanceStudent = this.addAttendanceStudent.bind(this);
    this.handleGetStudents = this.handleGetStudents.bind(this);
    this.handleTakeAttendanceClassSelection = this.handleTakeAttendanceClassSelection.bind(this);
    this.updateStudentsState = this.updateStudentsState.bind(this);
  }

  handleTakeAttendanceClassSelection(event){
    this.setState({attendanceCourseSelected: event.target.value});
    console.log("called");
  }

  onChangeFileUpload = event => {
    this.setState({studentPicture: event.target.files[0], loaded: 0,})
  }

  handleTakeAttendanceView(event){
    this.setState({takingAttendance: 'Yes'});
  }

  handleChange(event) {
    console.log(event.target.name + '  ' + event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    axios.post('http://10.0.0.146:8007/users/', { 'email': email, 'username': username, 'password': password }).then(console.log("Success"));
  }

  setLoggedInUser(v, id) {
    this.setState({ loggedInUser: v });
    this.setState({ id: id });
  }

  handleSubmitLogIn(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    const id = this.state.id;
    event.preventDefault();
    axios.get('http://10.0.0.146:8007/users/').then(responseArr => {
      for (var i = 0; i < responseArr.data.length; i++) {
        if (responseArr.data[i].username === username && responseArr.data[i].password === password) {
          this.setLoggedInUser(username, responseArr.data[i].id);
          break;
        }
      }
    });
    this.getClasses();
    this.getStudents();
  }


  signIn(e) {
    e.preventDefault();
    this.setState({ signUpLogIn: 'Sign In' });
    console.log(this.state.signUpLogIn);
  }

  signUp(e) {
    e.preventDefault();
    this.setState({ signUpLogIn: 'Log In' });
    this.setState({ signUpLogIn: 'Sign Up' });
  }

  setClassState(element) {
    this.setState({ courseArray: element });
    console.log(element);
  }

  setStudentState(element) {
    this.setState({ studentArray: element });
    console.log("hello");
    console.log(this.state.studentArray);
  }

  getClasses() {
    axios.get('http://10.0.0.146:8007/classes/').then(responseArr => {
      this.setClassState(responseArr.data);
    });
  }

  //get students
  getStudents() {
    axios.get('http://10.0.0.146:8007/students/').then(responseArr => {
      this.setStudentState(responseArr.data);
      console.log(responseArr.data);

    });
  }

  handleAddClass(event) {
    this.setState({ addingClass: "Yes" });
    console.log(this.state);

  }

  addAttendanceStudent(e) {
    for(var i=0;  i<e.length; i++){
      this.setState((prevState) => ({attendanceStudets: [...prevState.attendanceStudets, {student: e[i].studentName, attendancePicture: null}],}));
    }
  }

  handleViewClass(event, d) {

    this.setState({ viewClass: "Yes" });
    this.setState({ addingClass: "No" });
    this.setState({ selectedCourse: d.id });
    console.log(d);
    console.log(this.state.selectedCourse);
    console.log(this.state.studentArray)
    // this.setState({courseId: setcourseId})

  }

  handleSubmitCreateClass(event) {
    const courseId = this.state.courseId;
    const courseName = this.state.courseName;
    const meetingSchedule = this.state.meetingSchedule;


    axios.post('http://10.0.0.146:8007/classes/', { "courseId": courseId, "courseName": courseName, "meetingSchedule": meetingSchedule, "username": this.state.id });
    this.setState({ addingClass: "No" });
    this.getClasses();
  }

  //submit for enroll student 
  handleSubmitStudentClass(event) {
    event.preventDefault();
    const studentCourseId = this.state.courseArray.courseId;
    const studentName = this.state.studentName;
    const school_id = this.state.school_id;
    const studentPicture = this.state.studentPicture;
    const classEnrolled = this.state.selectedCourse;

    let submissionData = new FormData();
    submissionData.append('studentName', studentName);
    submissionData.append('school_id', school_id);
    submissionData.append('attendance', '');
    submissionData.append('studentPicture', studentPicture);
    submissionData.append('classEnrolled', classEnrolled);

    console.log({ 'studentName': studentName, 'school_id': school_id, 'attendence': '', 'studentPicture': studentPicture, 'classEnrolled': classEnrolled });
    axios.post('http://10.0.0.146:8007/students/', submissionData).then(alert("success!"));
    this.setState({ addingStudent: "No" });
  }

  updateStudentsState(event){
    this.setState({studentAttendanceList: event});
  }
  
  handleGetStudents(event){
    event.preventDefault();
    const setClass = this.state.attendanceCourseSelected;
    if(setClass != ''){
      for(var i=0; i<this.state.courseArray.length; i++){
        console.log(this.state.courseArray[i].id + this.state.attendanceCourseSelected);
        if(this.state.courseArray[i].id === setClass){
          this.updateStudentsState(this.state.courseArray);
          console.log(setClass);
          //const studentListing = this.state.courseArray[i].classes_enrolled.map((d) => <Form.Group><Form.Label>{d.studentName}</Form.Label><Form.Control value={this.state.school_id} onChange={this.handleChange} name="school_id" type="string " placeholder="Enter School ID"></Form.Control></Form.Group>)
        }
      }
    }
  }

  renderContent() {
    if (this.state.signUpLogIn === 'Sign Up') {
      return (
        <Container>
          <Row className="text-center mb-5">
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Create Your Account</h1>
            </Col>
          </Row>
          <Form onSubmit={this.handleSubmit}>
            <Row className="mb-4" float="middle">
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control value={this.state.email} onChange={this.handleChange} name="email" type="email" placeholder="Enter email"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicString">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control value={this.state.username} onChange={this.handleChange} name="username" type="username" placeholder="Enter username"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control value={this.state.password} onChange={this.handleChange} name="password" type="password" placeholder="Enter password"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="text-center" float="middle">
              <Col md={{ span: 6, offset: 3 }}>
                <Button variant="primary" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      );
    }
    if(this.state.takingAttendance === 'Yes') {
      console.log(this.state.courseArray);
      const courseListing = this.state.courseArray.map((d) => <option key={d.couseName, d.id} value={d.id}>{d.courseName}</option>);

      const selectedCourse = this.state.attendanceCourseSelected;
      
      return (
          <Form onSubmit={this.handleGetStudents}>
            <Form.Group>
              <Form.Label>Select a Course:</Form.Label>
              <select value={this.state.attendanceCourseSelected} onChange={this.handleTakeAttendanceClassSelection}>
                {courseListing}
              </select>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
      );
    }
    else if (this.state.viewClass != 'No') {
      const listDetail = this.state.courseArray.map((d) => <Card.Text id="course-detail" key={d.courseId, d.courseName, d.meetingSchedule} variant="secondary">{"Course ID: " + d.courseId + " " + "Course Name: " + d.courseName + " " + "Meeting Schedule: " + d.meetingSchedule}</Card.Text>);

      const studentEnrolledList = this.state.studentArray.map((f) => <Card id="viewClass" style={{ height: '5rem', width: '100%' }}><Card.Text id="student-detail" key={f.studentName, f.school_id, f.attendence, f.studentPicture} variant="secondary">{"Student Name: " + f.studentName + " " + "Student ID: " + f.school_id + " " + "Student Attendance : " + f.attendence}</Card.Text></Card>);
      return (
        <Container>
          <Row>
            <Card id="createClass" bg="primary" text="white" style={{ height: '15rem', width: '100%' }}>
              <Card.Header>Class Details</Card.Header>
              <Card.Body style={{ alignContent: "center" }}>
                <Row>
                  <Card id="viewClass" style={{ height: '5rem', width: '100%' }}>
                    <Card.Text id="course-detail" key={this.state.selectedCourse.courseId} variant="secondary">{"Course ID: " + this.state.selectedCourse.courseId + " " + "Course Name: " + this.state.selectedCourse.courseName + " " + "Meeting Schedule: " + this.state.selectedCourse.meetingSchedule + this.state.selectedCourse.username}</Card.Text>
                  </Card>
                </Row>

              </Card.Body>
            </Card>
          </Row>

          <Row>
            <Col >
              <Card id="manageClass" bg="primary" text="white" style={{ height: '100%', width: '100%' }}>
                <Card.Header>Students Enrolled</Card.Header>

                <Card.Body>
                  <Row>

                    {studentEnrolledList}

                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col >
              <Card id="manageClass" bg="primary" text="white" style={{ height: '28rem', width: '100%' }}>
                <Card.Header>Enroll Student</Card.Header>
                <Card.Body>
                  <Row className="mb-4" float="middle">
                    <Col md={{ span: 6, offset: 3 }}>
                      <Form onSubmit={this.handleSubmitStudentClass}>

                        <Form.Group controlId="formBasicStudentName">
                          <Form.Label>Student Name: </Form.Label>
                          <Form.Control value={this.state.studentName} onChange={this.handleChange} name="studentName" type="string" placeholder="Enter Student Name"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicStudentId">
                          <Form.Label>School ID: </Form.Label>
                          <Form.Control value={this.state.school_id} onChange={this.handleChange} name="school_id" type="string " placeholder="Enter School ID"></Form.Control>
                        </Form.Group>
{/* 
                        <Form.Group controlId="formBasicUploadImage">
                          <Form.Label>Attendance: </Form.Label>
                          <Form.Control value={this.state.uploadImage} onChange={this.handleChange} name="" type="" placeholder="uploadImage"></Form.Control>
                        </Form.Group> */}
                        <Form.Group>
                        <Form.Label>Upload Image: </Form.Label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">
                              Upload
                          </span>
                          </div>
                          <div className="custom-file">
                            <input
                              type="file"
                              name="profile-picture"
                              onChange={this.onChangeFileUpload}
                              className="custom-file-input"
                              id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01"
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                              Choose file
                          </label>
                          </div>
                        </div>
                        </Form.Group>

                        <Row className="text-center" float="middle">
                          <Col md={{ span: 6, offset: 3 }}>
                            <Button variant="primary" type="submit">Enroll</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );

    }
    else if (this.state.addingClass !== 'No') {
      return (
        <Form onSubmit={this.handleSubmitCreateClass}>
          <Row className="mb-4" float="middle">
            <Col md={{ span: 6, offset: 3 }}>
              <Form.Group controlId="formBasicInt">
                <Form.Label>Course ID:</Form.Label>
                <Form.Control value={this.state.courseId} onChange={this.handleChange} name="courseId" type="string" placeholder="Enter Course ID"></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicString">
                <Form.Label>Course Name:</Form.Label>
                <Form.Control value={this.state.courseName} onChange={this.handleChange} name="courseName" type="string" placeholder="Enter Course Name"></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Course Meeting Schedule:</Form.Label>
                <Form.Control value={this.state.meetingSchedule} onChange={this.handleChange} name="meetingSchedule" type="string" placeholder="Enter Course Meeting Schedule"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="text-center" float="middle">
            <Col md={{ span: 6, offset: 3 }}>
              <Button variant="primary" type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      );
    }
    else if (this.state.loggedInUser !== '') {
      const listButtons =

        this.state.courseArray.map((d) => <Button onClick={this.handleViewClass.bind(this, d)} id="course-list" key={d, d.courseId} variant="secondary">{d.courseId + ' ' + d.courseName}</Button>);



      return (
        <Container>
          <Row>
            <Col>
              <Card id="createClass" bg="primary" text="white" style={{ width: '18rem' }}>
                <Card.Header>Add Class</Card.Header>
                <Card.Body>
                  <Card.Title>Add a class to your dashboard.</Card.Title>
                  <Button onClick={this.handleAddClass.bind(this)} variant="secondary">+</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8}>
              <Card id="take-attendance" bg="primary" text="white" style={{ width: '100%' }}>
                <Card.Header>
                  Take Attendance
                </Card.Header>
                <Card.Body>
                  <Button onClick={this.handleTakeAttendanceView.bind(this)} variant="secondary">Take Attendance</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card id="manageClass" bg="primary" text="white" style={{ height: '36rem', width: '18rem' }}>
                <Card.Header>Manage Class</Card.Header>
                <Card.Body>
                  {listButtons}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={8}>
              <Card id="manageClass" bg="primary" text="white" style={{ height: '36rem', width: '100%' }}>
                <Card.Header>Recent Meetings</Card.Header>
                <Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    if (this.state.signUpLogIn === 'Sign In') {
      return (
        <Container>
          <Row className="text-center mb-5">
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Log In To Your Account</h1>
            </Col>
          </Row>
          <Form onSubmit={this.handleSubmitLogIn}>
            <Row className="mb-4" float="middle">
              <Col md={{ span: 6, offset: 3 }}>
                <Form.Group controlId="formBasicString">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control value={this.state.username} onChange={this.handleChange} name="username" type="username" placeholder="Enter username"></Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control value={this.state.password} onChange={this.handleChange} name="password" type="password" placeholder="Enter password"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="text-center" float="middle">
              <Col md={{ span: 6, offset: 3 }}>
                <Button variant="primary" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      );
    }
  }

  render() {
    const renderWhat = this.state.signUpLogIn;
    return (
      <div className="App">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Facial Recognition Based Attendance</Navbar.Brand>
            <Container id="button-group-navbar">
              <Button onClick={this.signIn.bind(this)} id="signIn" variant="primary">Sign In</Button>
              <Button onClick={this.signUp.bind(this)} id="createAccount" variant="primary">Create Account</Button>
            </Container>
          </Container>
        </Navbar>
        <Jumbotron>
          {this.renderContent()}
        </Jumbotron>
      </div>
    );
  }
}

export default App;
