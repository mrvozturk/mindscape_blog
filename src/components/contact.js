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
        <h1 className='header-7'>İLETİŞİM FORMU</h1>

        <p>
          Benimle iletişime geçmek isterseniz, aşağıdaki iletişim bilgilerinden
          birini kullanabilir veya iletişim formunu doldurabilirsiniz
        </p>
      </div>
      <div className='loginform-icon'>
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
      <form className='small-registration-form' onSubmit={handleSubmit}>
        <div className='small-form-group'>
          <input
            type='text'
            id='name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder='Ad-Soyad'
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
          Gönder
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
