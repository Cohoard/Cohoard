import Breadcrumb from 'react-bootstrap/Breadcrumb';
import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'; 

export default function Dashboard() {



  return (
    <div>
      <h1>Welcome to Cohoard!</h1>
      <Breadcrumb>
        <Breadcrumb.Item active href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="">
          Unit 1
        </Breadcrumb.Item>
        <Breadcrumb.Item >Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>

  )
}
