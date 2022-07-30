import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Navigate, useNavigate } from 'react-router';

const Signup = () => {

  const renderForm = (
    <div className='form'>
      <form>
        <div className='input-container'>
          <label>Username:</label>
          <input type='text' name='uname' required />
        </div>
        <div className='input-container'>
          <label>Password:</label>
          <input type='password' name='pass' required />
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
  
  return(
    <>
    <div className='login-form'>
      <div className='title'>Sign Up</div>
      {renderForm}

    </div>
    </>
  )
}

export default Signup;