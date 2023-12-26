import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Enter your email'
          />
          <Form.Control
            className='mt-3'
            placeholder='Enter your password'
          />
          <Row className='d-flex justify-content-between mt-3'>
            {isLogin ?
              <Col>
                No account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
              </Col>
            : <Col>
                Have the account? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
              </Col>
            }
            <Col className='d-flex justify-content-end'>
              <Button variant={"outline-success"}>
                {isLogin? 'Log In' : 'Register'}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;