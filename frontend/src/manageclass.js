<<<<<<< HEAD
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';
=======

import React from 'react';
import { browserHistory } from 'react-router';


export class homepage extends React.Component {
    render() {
        const listDetail = this.state.courseArray.map((d) => <Card.Text id="course-detail" key={d.courseId, d.courseName, d.meetingSchedule} variant="secondary">{"Course ID: " + d.courseId + " " + "Course Name: " + d.courseName + " " + "Meeting Schedule: " + d.meetingSchedule}</Card.Text>);

        console.log(listDetail);
        return (
            <Container>
                <Row>
                    <Card id="createClass" bg="primary" text="white" style={{ height: '15rem', width: '100%' }}>
                        <Card.Header>Class Details</Card.Header>
                        <Card.Body style={{ alignContent: "center" }}>
                            <Row>
                                <Card id="viewClass" style={{ height: '5rem', width: '100%' }}>
                                    {listDetail}
                                </Card>
                            </Row>

                        </Card.Body>
                    </Card>
                </Row>

                <Row>
                    <Col >
                        <Card id="manageClass" bg="primary" text="white" style={{ height: '25rem', width: '100%' }}>
                            <Card.Header>Students Enrolled</Card.Header>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col >
                        <Card id="manageClass" bg="primary" text="white" style={{ height: '25rem', width: '100%' }}>
                            <Card.Header>Enroll Student</Card.Header>
                            <Card.Body>
                                <Row className="mb-4" float="middle">
                                    <Col md={{ span: 6, offset: 3 }}>
                                        <Form onSubmit={this.handleSubmitStudentClass}>
                                            <Form.Group controlId="formBasicStudentId">
                                                <Form.Label>Student ID</Form.Label>
                                                <Form.Control value={this.state.studentId} onChange={this.handleChange} name="studentId" type="string " placeholder="Enter Student ID"></Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicStudentName">
                                                <Form.Label>Student Name:</Form.Label>
                                                <Form.Control value={this.state.studentName} onChange={this.handleChange} name="studentName" type="string" placeholder="Enter Student Name"></Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicUploadImage">
                                                <Form.Label>upload</Form.Label>
                                                <Form.Control value={this.state.uploadImage} onChange={this.handleChange} name="" type="" placeholder="uploadImage"></Form.Control>
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
}
>>>>>>> baefdebc57fb4f57d6ad34acd059d39c6df03053
