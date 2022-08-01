/**
 * The Signup function is a React component that renders a form with input fields for first name, last
 * name, username, and password. The form has an onChange event handler that updates the state of the
 * component with the value of the input field. The form also has an onClick event handler that sends a
 * POST request to the server with the state of the component as the body of the request
 * @returns A form with a submit button
 */
import e from 'cors';
import React from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

export default function Signup() {
  //setting state for input fields

  //react router navigate
  let navigate = useNavigate();

  //react hook, access state via the main function

  //first paramater: state object
  //second parameter: callback function that will update state
  const [signUp, setSignUp] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  });

  //handling onchange event
  const handleSignUp = (event) => {
    //spreading signup stat and making a copy of it
    const newState = { ...signUp };
    console.log('BIGASS OBJECT)', event);

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

        navigate('/login');
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
          //as you type in that field it will change
          onChange={handleSignUp}
          value={signUp.first_name}
        />
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
        <input
          type='text'
          name='username'
          id='usernameSignUp'
          placeholder='Username must be 8 characters'
          required
          onChange={handleSignUp}
          value={signUp.username}
        />
        <br></br>
        <br></br>
        <input
          type='text'
          name='password'
          id='passwordSignUp'
          placeholder='Password must be 8 characters'
          required
          onChange={handleSignUp}
          value={signUp.password}
        />
        <br></br>
        <br></br>

        <button type='reset' id='submitbutton' onClick={handleSignUpSubmit}>
          Submit
        </button>
      </form>
    </main>
  );
}
