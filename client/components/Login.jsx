import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();

  const [auth, setAuth] = useState({
    auth: false,
  });
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  //handling onchange event
  const handleLogin = (event) => {
    const newState = { ...login };
    newState[event.target.name] = event.target.value;
    setLogin(newState);
    console.log('LOGIN value is', login);
  };

  const handleLoginSubmit = (event) => {
    console.log(login);
    //write a fetch that does a post -- body of post should be state obj
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('THIS IS FETCH DATA FOR LOGIN', data);
        setAuth((auth.auth = true));
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <main>
      <h2>Login</h2>
      <br></br>
      <br></br>
      <form>
        <input
          type='text'
          name='username'
          id='usernameLogin'
          placeholder='@username'
          required
          onChange={handleLogin}
          value={login.username}
        />{' '}
        <br></br>
        <br></br>
        <input
          type='text'
          name='password'
          id='passwordLogin'
          placeholder='********'
          required
          onChange={handleLogin}
          value={login.password}
        />
        <br></br>
        <br></br>
        <button type='reset' id='submitbutton' onClick={handleLoginSubmit}>
          LOGIN
        </button>
        <br></br>
        <p id='OR'> ------------ OR ------------</p>
        <button className='oauthbutton'>GOOGLE</button>{""} <button className='oauthbutton'>GITHUB</button>
      </form>
    </main>
  );
}
