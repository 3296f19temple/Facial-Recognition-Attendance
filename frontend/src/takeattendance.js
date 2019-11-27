import React from 'react';
import { browserHistory } from 'react-router';


export class homepage extends React.Component {

    render() {
        const listDetailCard1 = this.state.courseArray.map((d) => <Card.Text id="course-detail" key={d.courseName, d.meetingSchedule} variant="secondary">{"Course Name: " + d.courseName + " " + "Meeting Date/Time: " + d.meetingSchedule}</Card.Text>);
        const listDetailCard2 = this.state.courseArray.map((d) => <Card.Text id="course-detail" key={d.uploadImage, d.calculateAttendance} variant="secondary">{"Upload Images " + d.uploadImage + " " + "Calculate Attendance " + d.calculateAttendance}</Card.Text>);
        return (
            <Container>
                <Row>
                    <Card id="courseSelect" bg="primary" text="white" style={{ height: '15rem', width: '100%' }}>
                        <Card.Header>Course Selection</Card.Header>
                        <Card.Body style={{ alignContent: "center" }}>
                            <Row>
                                <Card id="viewClass" style={{ height: '5rem', width: '100%' }}>
                                    {listDetailCard1}
                                </Card>
                            </Row>

                        </Card.Body>
                    </Card>
                </Row>

                <Row>
                    <Col >
                        <Card id="manageClass" bg="primary" text="white" style={{ height: '25rem', width: '100%' }}>
                            <Card.Header>Upload Class Pictures</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Card id="viewClass" style={{ height: '5rem', width: '100%' }}>
                                        {listDetailCard2}
                                    </Card>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col >
                        <Card id="manageClass" bg="primary" text="white" style={{ height: '25rem', width: '100%' }}>
                            <Card.Header>Class Statistics</Card.Header>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );

    }
}