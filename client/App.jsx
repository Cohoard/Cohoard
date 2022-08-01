/**
 * The App function renders the Navbar and Outlet components
 * @returns The Navbar is being returned.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './stylesheets/styles.scss';

function App() {
  return (
    <>
      <Navbar id='navbarpersist'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>COHOARD</Navbar.Brand>
          </LinkContainer>
          <Nav className='nav'>
            <LinkContainer to='/dashboard'>
              <Nav.Link href='/dashboard'>
                <span className='material-symbols-rounded' id='homeicon'>
                  home
                </span>
              </Nav.Link>
            </LinkContainer>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#resources'>Resources</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default App;
