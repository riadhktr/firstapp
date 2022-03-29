
import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


  
  
  function App() {
      return (
          <>
              <Container>
                  <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Sign In </h1>
                  <Row className="mt-5">
                      <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <Form>
                <Form.Group controlId="formusername">
                                  <Form.Label>Username</Form.Label>
                                  <Form.Control type="email" placeholder="Enter Username" />
                  </Form.Group> 
                  
                              <Form.Group controlId="Birthdate">
                                  <Form.Label>Birth Date</Form.Label>
                                  <Form.Control type="date" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="sex">
                                  <Form.Label>Genre</Form.Label>
                                  <Form.Check type="radio"
          label="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
                              </Form.Group>
                  
                  <Form.Group controlId="formBasicEmail">
                                  <Form.Label>Email address</Form.Label>
                                  <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>
  
                              <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Password</Form.Label>
                                  <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                                  <Form.Label>Confirm Password</Form.Label>
                                  <Form.Control type="password" placeholder="Confirm Password" />
                              </Form.Group>
                  
  
                              <Button variant="success btn-block" type="submit">
                                  Sign in
                              </Button>
                          </Form>
                      </Col>
                  </Row>
                  <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022. All Rights Reserved.</h6>
              </Container>
          </>
      );
  };

export default App;
