import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./stylesheets/styles.scss"



function App() {

  return (

    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Cohoard</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to='/dashboard'>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
            <LinkContainer to="/login">
            <Nav.Link href="/login">Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>


    </>
  )
}

export default App;

