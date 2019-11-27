import React from 'react';
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';


export const Header = (props) => {
    // const renderWhat = this.state.signUpLogIn;
    return (
       <div divclassName="App">
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#">Facial Recognition Based Attendance</Navbar.Brand>
                    <Container id="button-group-navbar">
                        {/* <Button onClick={this.signIn.bind(this)} id="signIn" variant="primary">Sign In</Button>
                        <Button onClick={this.signUp.bind(this)} id="createAccount" variant="primary">Create Account</Button> */}
                    </Container>
                </Container>
            </Navbar>
     
            </div>

    );
}
