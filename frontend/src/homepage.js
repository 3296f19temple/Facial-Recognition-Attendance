import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
// /* global window.localStorage */
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import querystring from 'querystring';
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

 export class Homepage extends React.Component {

    render() {
        //const listButtons = this.state.courseArray.map((d) => <Button onClick={this.handleViewClass.bind(this)} id="course-list" key={d.courseId} variant="secondary">{d.courseId + ' ' + d.courseName}</Button>);

        return (
            <Container>
                <p>Home</p>
            </Container>
        );
    }
}