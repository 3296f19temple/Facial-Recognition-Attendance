import React from 'react';
import { browserHistory } from 'react-router';


export class homepage extends React.Component {

    render() {
        const listButtons = this.state.courseArray.map((d) => <Button onClick={this.handleViewClass.bind(this)} id="course-list" key={d.courseId} variant="secondary">{d.courseId + ' ' + d.courseName}</Button>);

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
                                <Button variant="secondary">Take Attendance</Button>
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
}