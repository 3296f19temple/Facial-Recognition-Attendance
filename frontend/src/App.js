import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import querystring from 'querystring';
import {Navbar, Container, Jumbotron, Form, Button, Row, Col} from 'react-bootstrap';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     email: '',
  //     username: '',
  //     password: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({[event.target.name]: event.target.value});
  // }

  // handleSubmit(event) {
  //   const email = this.state.email;
  //   const username = this.state.username;
  //   const password = this.state.password;
  //   event.preventDefault();
  //   axios.post('http://97.107.128.107:8007/users/', {'email': email, 'username': username, 'password': password}).then(console.log("Success"));
  // }

  render(){
    return (
      <div className="App">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Facial Recognition Based Attendance</Navbar.Brand>
          </Container>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row className="text-center mb-5">
              <Col md={{ span: 6, offset: 3 }}>
                <h1>Create Your Account</h1>
                <Button>Take Attendance</Button>
              </Col>
            </Row>
            {/* <Form onSubmit={this.handleSubmit}>
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
            </Form> */}
          </Container>
          <Container>
            <Row>
              <Col md= {{ span: 4, offset: 3 }}>

              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
