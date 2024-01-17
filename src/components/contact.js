import React, { useState } from 'react';
import '../index.css';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='login-container'>
      <div className='left-content'>
        <h1>Let's work together</h1>
        <p>
          On both mobile and desktop platforms, I develop fast and interactive
          web applications with uninterrupted performance.
        </p>
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

        <div className='form-group'>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </div>

        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
