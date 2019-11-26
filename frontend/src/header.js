import React from 'react';
import { browserHistory } from 'react-router';


export const Header = (props) => {
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
