import React, { useState } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`card ${isHovered ? 'card--expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card__content">
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <p className="card__text">{text}</p>
          <button className="card__cta">Learn More</button>
        </div>
        <img 
          className="card__image"
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
