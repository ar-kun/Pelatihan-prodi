import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Container, Col, Row, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

function Auth({ login, register, isLogedIn, setIslogIn }) {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const onNameChange = (e) => {
  setName(e.target.value);
 };
 const onEmailChange = (e) => {
  setEmail(e.target.value);
 };
 const onPasswordChange = (e) => {
  setPassword(e.target.value);
 };

 const navigate = useNavigate();

 const onSubmit = (e) => {
  e.preventDefault();
  if (login) {
   axios
    .post('https://eshop.reskimulud.my.id/login', {
     email,
     password,
    })
    .then((res) => {
     <Alert key="success" variant="success">
      Berhasil login!
     </Alert>;
     setIslogIn(true);
     localStorage.setItem('eshop_jtw', res.data.data.token);
     navigate('/');
    })
    .catch((error) => alert(error.response.data.message));
  }
  if (register) {
   axios
    .post('https://eshop.reskimulud.my.id/register', {
     name,
     email,
     password,
    })
    .then((res) => {
     <Alert key="success" variant="success">
      Berhasil register
     </Alert>;
     navigate('/auth/login');
    })
    .catch((error) => alert(error.response.data.message));
  }
 };

 if (isLogedIn) {
  return <Navigate to="/" replace />;
 }

 if (login) {
  return (
   <Container className="mt-5">
    <Form onSubmit={onSubmit}>
     <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
       Email
      </Form.Label>
      <Col sm="10">
       <Form.Control value={email} onChange={onEmailChange} type="Email" placeholder="Email@example.com" />
      </Col>
     </Form.Group>

     <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
       Password
      </Form.Label>
      <Col sm="10">
       <Form.Control value={password} onChange={onPasswordChange} type="password" placeholder="Password" />
      </Col>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
     </Form.Group>
     <Button variant="primary" type="submit">
      Login
     </Button>
    </Form>
   </Container>
  );
 }
 if (register) {
  return (
   <Container className="mt-5">
    <Form onSubmit={onSubmit}>
     <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
      <Form.Label column sm="2">
       Full Name
      </Form.Label>
      <Col sm="10">
       <Form.Control value={name} onChange={onNameChange} type="text" placeholder="Full Name" />
      </Col>
     </Form.Group>

     <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
       Email
      </Form.Label>
      <Col sm="10">
       <Form.Control value={email} onChange={onEmailChange} type="Email" placeholder="Email@example.com" />
      </Col>
     </Form.Group>

     <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
       Password
      </Form.Label>
      <Col sm="10">
       <Form.Control value={password} onChange={onPasswordChange} type="password" placeholder="Password" />
      </Col>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
     </Form.Group>
     <Button variant="primary" type="submit">
      Register
     </Button>
    </Form>
   </Container>
  );
 }
}

export default Auth;
