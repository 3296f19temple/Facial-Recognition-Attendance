import React from 'react';
import { browserHistory } from 'react-router-dom';
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';

export class Signup extends React.Component {
    render() {
        const renderWhat = this.state.signUpLogIn;
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
}