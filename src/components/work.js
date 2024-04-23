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
    <div className='scrollable-container custom-card-container'>
      {' '}
      {/* Include custom-card-container class */}
      <div className='icon-row'>
        {languageIcons.map((icon, index) => (
          <img key={index} src={icon} alt={`Language Icon`} className='icon' />
        ))}
      </div>
      <div className='header-container'>
        <h1 className='header-2'>PROJELERİM</h1>
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
            <CardBody className='custom-card-body'>
              <CardTitle>{card.title}</CardTitle>
              <CardSubtitle>{card.subtitle}</CardSubtitle>
              <CardText className='custom-card-text'>{card.text}</CardText>
              <div className='custom-card-icons'>
                {card.icons &&
                  card.icons.map((icon, subIndex) => (
                    <div key={subIndex} className='custom-card-icon-2'>
                      <img src={icon.img} alt={icon.id} className='icon' />
                    </div>
                  ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Work;
