import React, { useRef } from 'react';
import {Container, Card, Button, Form} from "react-bootstrap";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from 'react-router-dom';

const Signin = () => {
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const {signin} = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      signin(userEmailRef.current.value, userPasswordRef.current.value);
      navigate('/account');
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh" }}>
          <div className="w-100" style={{maxWidth: "400px"}} >
              <Card>
                  <Card.Body>
                      <h2 className="text-center mb-4">Sign In</h2>
                      <Form>
                          <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control className="mb-2" type="email" ref={userEmailRef} required/>
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control className="mb-2" type="password" ref={userPasswordRef} required/>
                          </Form.Group>
                          <Button onClick={() => handleSignIn()} className="w-100 mt-1">SingIn</Button>
                      </Form>
                  </Card.Body>
              </Card>
          </div>
      </Container>
    </>
  )
}

export default Signin;