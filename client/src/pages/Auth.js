import React, {useContext, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const {user} = useContext(Context);
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      history(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  }

  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='mt-3'
            placeholder='Enter your email'
          />
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='mt-3'
            placeholder='Enter your password'
            type='password'
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
              <Button
                onClick={click}
                variant={"outline-success"}
              >
                {isLogin? 'Log In' : 'Register'}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;