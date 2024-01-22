import React, { useState } from 'react';
import '../index.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration logic here, e.g., send data to server
    console.log('Registration submitted:', { name, email, password });

    // Reset the form after submission
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='registration-container' id='registrationFormSection'>
      <div className='left-content'>
      <h1 className='header-3'>CONTACT US</h1>

        <h1>Create an account</h1>
        <p>
          Join us to explore a world of opportunities and collaboration. Let's
          build something amazing together!
        </p>
      </div>
      <form className='small-registration-form' onSubmit={handleSubmit}>
        <div className='small-form-group'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Name'
          />
        </div>

        <div className='small-form-group'>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email'
          />
        </div>

        <div className='small-form-group'>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </div>

        <button className='contact-button' type='submit'>Send Message</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
