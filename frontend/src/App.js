import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Container, Jumbotron, Form, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Facial Recognition Based Attendance</Navbar.Brand>
        </Container>
      </Navbar>
      <Jumbotron>
        <h1>Create Your Account:</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter password"></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

export default App;
