import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { Link, Outlet } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Unit1 from './Unit1';
import Unit2 from './Unit2';
import Unit3 from './Unit3';
import Unit4 from './Unit4';
import Unit5 from './Unit5';
import Unit6 from './Unit6';

export default function Dashboard() {

  let navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Cohoard Unit Dashboard!</h2>
      <h6>
        Here we can access our: Individual Units, Our Main Resources and Live
        Chat!
      </h6>
      <div id='accordiondiv' className='flexcontainer'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Unit 1 JS Fundamentals</Accordion.Header>
            <Accordion.Body>
Learning Goals
Understand how to manipulate date types - integers, strings, booleans, objects, and arrays
Understand closures
Understanding of callbacks

              <NavLink to='/dashboard/Unit1'> Unit 1</NavLink>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Unit 2 Data Structures</Accordion.Header>
            <Accordion.Body>
            Understand pseudoclassical inheritance pattern
Understand the use case of data structures provided in challenges
Be able to reimplement data structures provided in challenges
              <Link to='/Unit2'> Unit 2</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Unit 3 Algorithms</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit3'> Unit 3</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Unit 4 Snake</Accordion.Header>
            <Accordion.Body>
            Using JavaScript to change the look and behavior of the DOM
            React to user input
            Utilize object-oriented programming
              <Link to='/Unit4'> Unit 4</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Unit 5 AJAX Online Chatroom</Accordion.Header>
            <Accordion.Body>
            Use even more asynchronous requests so that you can develop a deeper understanding and familiarity with asynchronous code. If you remember one thing from this unit, remember that AJAX (asynchronous JavaScript and XML) allows the browser to communicate with a foreign server without reloading the page.
              <Link to='/Unit5'> Unit 5</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>Unit 6 React TIC TAC TOE</Accordion.Header>
            <Accordion.Body>
            Utilize React one-way data flow by passing down props
Update state from child components
Use JSX and Webpack
              <Link to='/Unit6'> Unit 6</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Routes>
        <Route path='/Unit1' element={<Unit1 />} />
        <Route path='/Unit2' element={<Unit2 />} />
        <Route path='/Unit3' element={<Unit3 />} />
        <Route path='/Unit4' element={<Unit4 />} />
        <Route path='/Unit5' element={<Unit5 />} />
        <Route path='/Unit6' element={<Unit6 />} />
      </Routes>
    </div>
  );
}