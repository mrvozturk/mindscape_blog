import React from 'react';
import '../index.css';
import aboutImage from '../images/about.jpg';

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
          Web geliştirme konusunda deneyimli bir yazılımcıyım. React.js,
          Next.js, JavaScript, TypeScript, HTML, CSS, Bootstrap, Redux ve Figma
          gibi araçlarla kullanıcı dostu web uygulamaları oluşturuyorum, GitHub
          üzerinde projelerimi yönetirken sürekli kendimi geliştiriyorum.
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
