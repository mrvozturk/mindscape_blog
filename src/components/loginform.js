import React, { useState } from 'react';
import '../index.css';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='login-container' id='loginFormSection'>
      <div className='left-content'>
        <h1 className='header4'>Let's work together</h1>
        <p className='loginform-p'>
          On both mobile and desktop platforms, I develop fast and interactive
          web applications with uninterrupted performance.
        </p>
        <div className=''>
          {' '}
          <a
            href='mailto:ozturkmerve745@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link'
          >
            <img
              height='35'
              src='https://cdn-icons-png.flaticon.com/512/552/552486.png'
              alt='Email Icon'
            />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href='https://www.linkedin.com/in/merve-%C3%B6-5062a5260/'
            target='_blank'
            rel='noopener noreferrer'
            className='icon-link'
          >
            <img
              height='35'
              src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png'
              alt='LinkedIn Icon'
            />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <form className='login-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder='Name'
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder='Email'
          />
        </div>

        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm
