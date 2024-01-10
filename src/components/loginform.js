// LoginForm.js

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
        <h1>Sayfa Başlığı</h1>
        <p>Bu bir metindir.</p>
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder='Name'
          />
        </label>
        
        <label>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder='E-posta adres'
          />
        </label>
    
        <label>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </label>
        <br />
        <button type='submit'>Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginForm;
