import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/characters">Personagens</Nav.Link>
            <Nav.Link href="/comics">Quadrinhos</Nav.Link>
            <Nav.Link href="/creators">Criadores</Nav.Link>
            <Nav.Link href="/events">Eventos</Nav.Link>
            <Nav.Link href="/series">Séries</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
