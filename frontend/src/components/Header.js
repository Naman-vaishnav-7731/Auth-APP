import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className='text-warning'>Auth App</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          {token && (
            <Button variant="outline-warning" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

