
// /* global window.localStorage */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import querystring from 'querystring';
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';


import {header} from "./header";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {/* <Header /> */}
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {/* {this.props.children} */}
                    </div>
                </div>
            </div>
        );
    }
}
