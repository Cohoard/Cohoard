
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from './react_routers/Dashboard';
import Signup from './react_routers/Signup';
import Login from './react_routers/Login';
import Unit1 from "./react_routers/Unit1";
import Unit2 from "./react_routers/Unit2";
import Unit3 from "./react_routers/Unit3";
import Unit4 from "./react_routers/Unit4";
import Unit5 from "./react_routers/Unit5";
import Unit6 from "./react_routers/Unit6";


const root = createRoot(
    document.getElementById("root")
  );

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
             <Route path='/signup' element={<Signup />} />
                <Route path="/login" element={<Login />}>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

