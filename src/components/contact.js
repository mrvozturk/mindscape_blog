import React, { useState } from 'react';
import '../index.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setName('');
    setEmail('');
  };

  return (
    <div className='registration-container' id='registrationFormSection'>
      <div className='left-content'>
        <h1 className='header-7'>CONTACT US</h1>

        <h1 className='header-5'>Create an account</h1>
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
            onChange={e => setName(e.target.value)}
            required
            placeholder='Name'
          />
        </div>

        <div className='small-form-group'>
          <input
            type='email'
            id='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder='Email'
          />
        </div>

        <button className='contact-button' type='submit'>
         Send Message
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
