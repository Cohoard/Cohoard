import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/SVGMAINLOGO.svg';

export default function PublicHome() {
  return (
    <div className='prelogin'>
      <br></br> <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className='centerme'>
        <Link to="/signup">
          <button type='submit' className='startbuttons' id='gettingstarted'>
            GET STARTED
          </button>
        </Link>
      </div>
      <br className='btnbreak'></br>
      <div className='centerme'>
        <Link to='login'>
          <button type='submit' className='startbuttons' id='alreadybutton'>
            I already have an account
          </button>
        </Link>
      </div>
    </div>
  );
}
