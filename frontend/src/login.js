import React from 'react'
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { withRouter, Redirect, Link } from 'react-router-dom';
import { Homepage } from './homepage'


import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import querystring from 'querystring';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedin: true,
      loggedInUser: '',
      signUpLogIn: ''
    

    }

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  setLoggedInUser(v) {
    this.setState({ loggedInUser: v });
  }

  signIn(e) {
  e.preventDefault();
  this.setState({ signUpLogIn: 'Sign In' });
  console.log(this.state.signUpLogIn);
  console.log(this.state)
  
  }
  

  handleSubmitLogIn(event) {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    this.signIn(event);

    axios.get('http://10.0.0.146:8000/users/').then(responseArr => {
      for (var i = 0; i < responseArr.data.length; i++) {
        if (responseArr.data[i].username === username && responseArr.data[i].password === password) {
          this.setLoggedInUser(username);
          break;
        }
      }
    });
    this.getClasses();
  }

  getClasses() {
    axios.get('http://10.0.0.146:8000/classes/').then(responseArr => {
      // this.setClassState(responseArr.data);
    });
  }
 

  

  render() {
    const { email, username, password } = this.props;
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
                <Form.Control value={username} onChange={this.handleChange} name="username" type="username" placeholder="Enter username"></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control value={password} onChange={this.handleChange} name="password" type="password" placeholder="Enter password"></Form.Control>
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

Login.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string
};
export default withRouter(Login);