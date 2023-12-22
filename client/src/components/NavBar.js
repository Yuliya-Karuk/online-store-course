import React, { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
          {user.isAuth ?
            <Nav className="ml-auto" style={{color: 'white'}}>
              <Button variant={"outline-light"} className="me-2">Admin panel</Button>
              <Button variant={"outline-light"}>Log out</Button>
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