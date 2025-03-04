import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <span class='text-warning'>Auth App</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header;
