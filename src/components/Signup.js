import React, {useRef, useState} from 'react'
import {Container, Card, Button, Form} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import {useAuth} from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    //e.preventdefault();
    setError('');
    try {
        await signup(emailRef.current.value, passwordRef.current.value);
        navigate('/account');
    } catch (e) {
        setError(e.message);
        console.log(error);
    }
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh" }}>
          <div className="w-100" style={{maxWidth: "400px"}} >
              <Card>
                  <Card.Body>
                      <h2 className="text-center mb-4">Sign Up</h2>
                      <Form>
                          <Form.Group>
                              <Form.Label>Email</Form.Label>
                              <Form.Control className="mb-2" type="email" ref={emailRef} required/>
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password</Form.Label>
                              <Form.Control className="mb-2" type="password" ref={passwordRef} required/>
                          </Form.Group>
                          <Form.Group>
                              <Form.Label>Password Confirmation</Form.Label>
                              <Form.Control className="mb-2" type="password" ref={passwordConfirmRef} required/>
                          </Form.Group>
                          <Button onClick={handleSignUp} className="w-100 mt-1">Singup</Button>
                      </Form>
                  </Card.Body>
              </Card>
              <div className="w-100 text-center mt-2">
                  Already have an account? <Link to='/signin'>Log In</Link>
              </div>
          </div>
      </Container>
    </>
  )
}

export default Signup;