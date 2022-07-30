import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
      <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Cohoard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#dashBoard">Dashboard</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Resources</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App;

