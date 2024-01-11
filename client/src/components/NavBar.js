import React, { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  const history = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => history(ADMIN_ROUTE)} className="me-2">Admin panel</Button>
            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Log out</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;