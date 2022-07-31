import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';


export default function Login() {

let navigate = useNavigate();

const [auth, setAuth] = useState({
  auth: false
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
     
          setAuth(auth.auth = true);
          navigate("/dashboard")
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  return (
    <main>
      <h2>Login</h2>
      <br></br>
        <br></br>
        <br></br>
      <form>
     <input
          type='text'
          name='username'
          id='usernameSignUp'
          placeholder='Must be at least 8 Characters'
          required
          onChange={handleLogin}
          value={login.username}
        /> <br></br><br></br><br></br>
        <input
          type='text'
          name='password'
          id='passwordSignUp'
          placeholder='Must be at least 8 Characters'
          required
          onChange={handleLogin}
          value={login.password}
        /><br></br><br></br><br></br>
        <button type='reset' id='signUpButton' onClick={handleLoginSubmit}>
          Submit
        </button>
        </form>
      </main>
  );
}