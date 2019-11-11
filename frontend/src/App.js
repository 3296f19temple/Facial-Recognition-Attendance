/* global window.localStorage */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import querystring from 'querystring';
import {Navbar, Container, Jumbotron, Form, Button, Row, Col, Card} from 'react-bootstrap';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      signUpLogIn: 'Sign Up',
      loggedInUser: '',
      courseArray: [],
      addingClass: 'No',
      courseId: '',
      courseName: '',
      courseMeetingSchedule: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
    this.handleSubmitCreateClass = this.handleSubmitCreateClass.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    axios.post('http://97.107.128.107:8007/users/', {'email': email, 'username': username, 'password': password}).then(console.log("Success"));
  }

  setLoggedInUser(v){
    this.setState({loggedInUser: v});

  }

  handleSubmitLogIn(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    axios.get('http://97.107.128.107:8007/users/').then(responseArr => {
      for(var i = 0; i < responseArr.data.length; i++){
        if(responseArr.data[i].username === username && responseArr.data[i].password === password){
          this.setLoggedInUser(username);
          break;
        }
      }
    });
    this.getClasses();
  }

  signIn(e){
    e.preventDefault();
    this.setState({signUpLogIn: 'Sign In'});
    console.log(this.state.signUpLogIn);
  }

  signUp(e){
    e.preventDefault();
    this.setState({signUpLogIn: 'Log In'});
    this.setState({signUpLogIn: 'Sign Up'});
  }

  setClassState(element){
    this.setState({courseArray: element})
    console.log(element);
  }

  getClasses(){
    axios.get('http://97.107.128.107:8007/classes/').then(responseArr => {
      this.setClassState(responseArr.data);
    });
  }

  handleAddClass(event){
    this.setState({addingClass: "Yes"});
  }

  handleSubmitCreateClass(event){
    const courseId = this.state.courseId;
    const courseName = this.state.courseName;
    const courseMeetingSchedule = this.state.courseMeetingSchedule;
    axios.post('http://97.107.128.107:8007/classes/', {"courseId": courseId, "courseName": courseName, "meetingSchedule": courseMeetingSchedule});
    this.setState({addingClass: "No"});
    this.getClasses();
  }

  renderContent(){
    if(this.state.signUpLogIn === 'Sign Up'){
      return(
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
    else if(this.state.addingClass != 'No'){
      return(
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
              <Form.Control value={this.state.courseMeetingSchedule} onChange={this.handleChange} name="courseMeetingSchedule" type="string" placeholder="Enter Course Meeting Schedule"></Form.Control>
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
    else if(this.state.loggedInUser != ''){
      const listButtons = this.state.courseArray.map((d) => <Button id="course-list" key={d.courseId} variant="secondary">{d.courseId + ' ' + d.courseName}</Button>);
      return(
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
              <Card id="take-attendance" bg="primary" text="white" style={{width: '100%'}}>
                <Card.Header>
                  Take Attendance
                </Card.Header>
                <Card.Body>
                  <Button variant="secondary">Take Attendance</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card id="manageClass" bg="primary" text="white" style={{height: '36rem', width: '18rem' }}>
              <Card.Header>Manage Class</Card.Header>
              <Card.Body>
                {listButtons}
              </Card.Body>
            </Card>
            </Col>
            <Col xs={8}>
            <Card id="manageClass" bg="primary" text="white" style={{height: '36rem', width: '100%' }}>
              <Card.Header>Recent Meetings</Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    else{
      return(
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

  render(){
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
