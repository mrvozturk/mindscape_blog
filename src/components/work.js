import React from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'react-bootstrap';
import '../index.css';
import { languageIcons, cardData } from '../data';

const Work = () => {
  const handleImageClick = link => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className='scrollable-container'>
     
        <div className='icon-row'>
          {languageIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Language Icon`}
              className='icon'
            />
          ))}
        </div>
  

      <div className='header-container'>
        <h1 className='header-2'>Latest Work</h1>
      </div>
      <div className='image-row'>
        {cardData.map((card, index) => (
          <Card key={index} className='custom-card'>
            <div
              className='custom-card-image'
              onClick={() => handleImageClick(card.link)}
            >
              <img src={card.image} alt={card.title} />
            </div>
            <CardBody>
              <CardTitle>{card.title}</CardTitle>
              <CardSubtitle>{card.subtitle}</CardSubtitle>
              <CardText>{card.text}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Work;
