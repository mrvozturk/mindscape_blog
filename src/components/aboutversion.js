import React from 'react';
import '../index.css';
import aboutImage from '../images/aboutimage.png';

const AboutPage = () => {
  return (
    <div className='new-about-page-container'>
      <div className='new-text-container'>
        <h1 className='new-h1'>"designer"</h1>
        <div className='new-image-container'>
          <img src={aboutImage} alt='About' className='new-about-image' />
        </div>
        <h1 className='new-h1'> "coder" </h1>
      </div>
      <p className='new-paragraph'>
        Ability to put themselves in the merchant's shoes. It is meant to
        partner on the long run, and work as an extension of the merchant's
        <br />
        team. A digital agency is a business you hire to outsource your digital
        marketing efforts,
        <br /> instead of handling in-house. They can provide your business with
        a variety of digital solutions to promote your product or service online
        and help you. <br />A digital agency is a business you hire to outsource your
        digital marketing efforts,  <br />instead of handling in-house. They can
        provide your business with a variety of digital solutions to promote
        your product or service online and help you.
      </p>
    </div>
  );
};

export default AboutPage;
