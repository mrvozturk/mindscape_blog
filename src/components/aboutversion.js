import React from 'react';
import '../index.css';
import aboutImage from '../images/aboutimage.png';

const AboutPage = () => {
  return (
    <div className='custom-page-container'>
      <div className='custom-text-container'>
        <div className='custom-image-container animated-image'>
          <img src={aboutImage} alt='About' className='custom-image' />
        </div>
        <div className='custom-paragraph animated-text'>
          <h1 className='custom-about'>About Me</h1>
          <p>
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run and work as an extension of the merchant's
            team. A digital agency is a business you hire to outsource your
            digital marketing efforts, instead of handling in-house. They can
            provide your business with a variety of digital solutions to promote
            your product or service online and help you.
          </p>
        </div>
        <div className='loginform-icon'>
          <a
            href='mailto:ozturkmerve745@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='about-link'
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
            className='about-link'
          >
            <img
              height='35'
              src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png'
              alt='LinkedIn Icon'
            />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href='https://github.com/mrvozturk'
            target='_blank'
            rel='noopener noreferrer'
            className='about-link'
          >
            <img
              height='35'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png'
              alt='LinkedIn Icon'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
