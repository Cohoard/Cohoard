import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { Link, Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Unit1 from './Unit1';
import Unit2 from './Unit2';
import Unit3 from './Unit3';
import Unit4 from './Unit4';
import Unit5 from './Unit5';
import Unit6 from './Unit6';

export default function Dashboard() {
  return (
    <div>
      <h2>Welcome to the Cohoard Unit Dashboard!</h2>
      <h6>
        Here we can access our: Individual Units, Our Main Resources and Live
        Chat!
      </h6>
      <Routes>
        <Route path='/Unit1' element={<Unit1 />} />
        <Route path='/Unit2' element={<Unit2 />} />
        <Route path='/Unit3' element={<Unit3 />} />
        <Route path='/Unit4' element={<Unit4 />} />
        <Route path='/Unit5' element={<Unit5 />} />
        <Route path='/Unit6' element={<Unit6 />} />
      </Routes>
      <div id='accordiondiv' className='flexcontainer'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Unit 1</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit1'> Unit 1</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Unit 2</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit2'> Unit 2</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>Unit 3</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit3'> Unit 3</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Unit 4</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit4'> Unit 4</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Unit 5</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit5'> Unit 5</Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='5'>
            <Accordion.Header>Unit 6</Accordion.Header>
            <Accordion.Body>
              Here is a brief description of unit:
              <Link to='/Unit6'> Unit 6</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}