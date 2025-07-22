import React, { useState } from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
  ySpacing?: number; // Optional prop to control alignment
  xSpacing?: number; // Optional prop for random spacing
}

const Card: React.FC<CardProps> = ({ imageUrl, title, text, ySpacing = 0, xSpacing = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const leftRandom = xSpacing  + 20;
  const rightRandom = xSpacing  + 20;
  
  return (
    <div 
      className={`card ${isHovered ? 'card--expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        marginLeft: leftRandom + 'px',
        marginRight: rightRandom + 'px',
        marginTop: ySpacing + 'px',
      }}
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
