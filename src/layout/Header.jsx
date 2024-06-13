import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (  
    <Navbar expand="lg" style={headerStyle}>
      <Container fluid>
        <Nav.Link href="/" style={headerStyle}>Canteiro da Erva</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/tempo" style={headerStyle}>Tempo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


const headerStyle = {
  color: '#Black',
  marginRight: '1.5rem',
  backgroundColor: '#00ccff',
};

const brandStyle = {
  color: '#00ccff',
  fontWeight: 'bold',
};


export default Header;