import React from 'react';
import { render } from 'react-dom';
//import {Router, Route, browserHistory, IndexRoute} from 'react-router-dom';
// import {Router, Route, browserHistory, Link, IndexRoute} from "react-router-dom";
import {
    BrowserRouter as Router,
    browserHistory,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import querystring from 'querystring';
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap';


import { Root } from "./Root";
import { homepage } from "./homepage";
import { signup } from "./signup";


import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './header';
import Login from './login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            username: null,
            password: null
        };
    }
    


    render() {
        const {
            email,
            username,
            password
        } = this.state;

        return (<div>
            <Header></Header>
            <Router><Login username={username} password={password}></Login></Router>
        </div>
        );

    }
    // async componentDidMount() {
    //     axios.get('http://10.0.0.146:8000/users/').then(responseArr => {
    //               for (var i = 0; i < responseArr.data.length; i++) {
    //                 if (responseArr.data[i].username === username && responseArr.data[i].password === password) {
    //                     const username = responseArr.data[i].username;
    //                     const password = responseArr.data[i].password;
    //                     this.setState({username: username, password:password})
    //                   break;
    //                 }
    //               }
    //             });
    //     }

     
        // }).then(responseArr => {
        //     for (var i = 0; i < responseArr.data.length; i++) {


        //     }
        // });

  //get students
//   getStduents() {
//     axios.get('http://10.0.0.146:8000/students/').then(responseArr => {
//       this.setStudentState(responseArr.data);
//     });
//   }

        // userData = userData.data.results[0];
        // const email = userData.email;
        // const username = userData.username;
        // const password = userData.password;

   
    




    // render () {
    //     return (
    //         // <Router history={browserHistory}>
    //             <Route path={"/"} component={Root} >
    //                 {/* <IndexRoute component={homepage} /> */}
    //                 <Route path={"signup/:id"} component={signup} />
    //                 <Route path={"homepage"} component={homepage} />
    //             </Route>
    //              <Route path={"home-single"} component={homepage}/> 
    //         // </Router>
    //     );
    // }

}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
