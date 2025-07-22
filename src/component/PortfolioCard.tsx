import React, { useState } from 'react';

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageSrc, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="portfolio-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`portfolio-card__inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="portfolio-card__front" style={{ backgroundImage: `url(${imageSrc})` }}>
          <h3 className="portfolio-card__front-title">{title}</h3>
        </div>
        <div className="portfolio-card__back">
          <div>
            <h3 className="portfolio-card__back-title">{title}</h3>
            <p className="portfolio-card__back-description">{description}</p>
          </div>
          <a href="#" className="portfolio-card__cta">
            See Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;