
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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


const root = createRoot(
    document.getElementById("root")
  );

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path='/signup' element={<Signup />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/unit1" element={<Unit1 />}/>
            <Route path="/unit2" element={<Unit2 />}/>
            <Route path="/unit3" element={<Unit3 />}/>
            <Route path="/unit4" element={<Unit4 />}/>
            <Route path="/unit5" element={<Unit5 />}/>
            <Route path="/unit6" element={<Unit6 />}/>
        </Routes>
    </BrowserRouter>
);

