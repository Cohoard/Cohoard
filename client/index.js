import React from 'react';
import { render } from 'react-dom';
import { BrowserRoute } from 'react-router-dom';
import App from './App';

render (
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);


