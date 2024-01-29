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
      </div>
    </div>
  );
};

export default AboutPage;
