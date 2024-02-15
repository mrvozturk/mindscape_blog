import React from 'react';
import '../index.css';
import aboutImage from '../images/aboutimage.png';

const About = () => {
  const scrollToLoginForm = () => {
    const loginFormSection = document.getElementById('loginFormSection');
    loginFormSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='about-container'>
      <div className='frontend-developer'>
        <h1 className='header-3'>Frontend Developer</h1>
        <p className='body-text'>
          Frontend developer olarak, web uygulamalarının ön yüzünü geliştirme
          konusunda uzmanlıkla çalışıyor, estetik ve kullanıcı dostu arayüzler
          tasarlıyorum
        </p>
        <button
          className='custom-button'
          type='submit'
          onClick={scrollToLoginForm}
        >
          İletişim
        </button>
      </div>
      <div className='about-image-container'>
        <img src={aboutImage} alt='About' className='about-image' />
      </div>
    </div>
  );
};

export default About;
