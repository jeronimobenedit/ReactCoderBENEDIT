import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import CartWidget from './CartWidget.jsx';

function NavBar() {
    const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Catalogo</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch modal with grid
            </Button>

        <CartWidget show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;