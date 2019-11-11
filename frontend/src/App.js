/* global window.localStorage */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import querystring from 'querystring';
import {Navbar, Container, Jumbotron, Form, Button, Row, Col} from 'react-bootstrap';

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
      logged_in: window.localStorage.getItem('token') ? true : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    fetch('http://97.107.128.107:8007/login/users',
    {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({'username': username, 'password': password})}).then(res=>res.json()).then(json=>{window.localStorage.setItem('token', json.token); this.setState({logged_in: true, username: json.user.username});});
  }

  handleSubmitLogIn(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    axios.post('http://97.107.128.107:8007/login/users', {'username': username, 'password': password}).then(res => res.json()).then(json=>{window.localStorage.setItem('token', json.token); this.setState({logged_in: true, username: json.user.username});});
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
