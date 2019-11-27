import React from 'react'
import { Navbar, Container, Jumbotron, Form, Button, Row, Col, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { withRouter, Redirect } from 'react-router-dom';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loggedin: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    setLoggedInUser(v) {
      this.setState({ loggedInUser: v });
    }
  



    handleClick(e) {
      e.preventDefault();
  
    }

    render() {
        const {email, username, password} = this.props;
      return  (
                <Container>
                  <Row className="text-center mb-5">
                    <Col md={{ span: 6, offset: 3 }}>
                      <h1>Log In To Your Account</h1>
                    </Col>
                  </Row>
                  <Form onSubmit={this.handleSubmitLogIn}>
                    <Row className="mb-4" float="middle">
                      <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group controlId="formBasicString">
                          <Form.Label>Username:</Form.Label>
                          <Form.Control value={username}  name="username" type="username" placeholder="Enter username"></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password:</Form.Label>
                          <Form.Control value={password} name="password" type="password" placeholder="Enter password"></Form.Control>
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
       ); }
  }
  
  Login.propTypes = {
      email: PropTypes.string,
      username: PropTypes.string,
      password: PropTypes.string
  };
  export default withRouter(Login);