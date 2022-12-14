
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/styles.scss";
import App from "./App";
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Login from './components/Login';
import Unit1 from "./components/Unit1";
import Unit2 from "./components/Unit2";
import Unit3 from "./components/Unit3";
import Unit4 from "./components/Unit4";
import Unit5 from "./components/Unit5";
import Unit6 from "./components/Unit6";
import PublicHome from './components/PublicHome';


const root = createRoot(
    document.getElementById("root")
  );

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/" element={<PublicHome/>}/>
      <Route path='/signup' element={<Signup />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard/*" element={<Dashboard />}/>
      </Route>        
    </Routes>
  </BrowserRouter>
);

