import React, { useState } from 'react';

import { Container, Form, Button } from 'react-bootstrap';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='login__container'> 
    <Container fluid className=''>
      <h1 className="mt-5">Login</h1>
      <Form className="mt-3  d-flex flex-column justify-content-between gap-4" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className='d-flex flex-column align-items-start'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='d-flex flex-column align-items-start'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
 
    </div>
  );
}

export default LoginPage;
