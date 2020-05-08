import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Form-Validation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="https://sonjoydatta.me">Website</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sonjoydatta">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;