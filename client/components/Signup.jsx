import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function Signup() {
  //setting state for input fields
  let navigate = useNavigate();
  const [signUp, setSignUp] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  });
  //handling onchange event
  const handleSignUp = (event) => {
    const newState = { ...signUp };
    newState[event.target.name] = event.target.value;
    setSignUp(newState);
    console.log('SIGN UP value is', signUp);
  };

  const handleSignUpSubmit = (event) => {
    console.log(signUp);
    //write a fetch that does a post -- body of post should be state obj
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(signUp),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success: FROM INSIDE HANDLESIGNUP');
          navigate("/login")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  // action='/signup' method='POST'
  return (
    <main>
      <h2>Sign Up</h2>
      <br></br>
        <br></br>
        <br></br>
      <form>
        <input
          type='text'
          name='first_name'
          id='firstNameSignUp'
          placeholder='First Name'
          required
          onChange={handleSignUp}
          value={signUp.first_name}
        /> 
        <br></br>
        <br></br>
        <br></br>
        <input
          type='text'
          name='last_name'
          id='lastNameSignUp'
          placeholder='Last Name'
          required
          onChange={handleSignUp}
          value={signUp.last_name}
        /> 
        <br></br>
        <br></br>
        <br></br>
        <input
          type='text'
          name='username'
          id='usernameSignUp'
          placeholder='Must be at least 8 Characters'
          required
          onChange={handleSignUp}
          value={signUp.username}
        /> 
        <br></br>
        <br></br>
        <br></br>
        <input
          type='text'
          name='password'
          id='passwordSignUp'
          placeholder='Must be at least 8 Characters'
          required
          onChange={handleSignUp}
          value={signUp.password}
        />
         <br></br>
         <br></br>
         <br></br>
        <button type='reset' id='signUpButton' onClick={handleSignUpSubmit}>
          Submit
        </button>
      </form>
    </main>
  );
}
