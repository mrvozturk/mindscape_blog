import React from 'react';
import '../index.css';
import aboutImage from '../images/aboutimage.png';

const About = () => {
  return (
    <div className='about-container'>
      <div className='Frontend-Developer'>
        <h1 className='h1'>Frontend Developer</h1>
        <p className='body-text'>
          On both mobile and desktop platforms,I develop fast and interactive
          web applications with uninterrupted performance.
        </p>
        <button className='custom-button'>Contact</button>
      </div>
      <div className='about-image-container'>
        <img src={aboutImage} alt='About' className='about-image' />
      </div>
    </div>
  );
};

export default About;
