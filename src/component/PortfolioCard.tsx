import React from 'react';

interface PortfolioCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card__inner">
        <div className="portfolio-card__front">
          {/* Default content (image or placeholder) */}
          <img src={imageSrc} alt="Portfolio Item" className="portfolio-card__image" />
        </div>
        <div className="portfolio-card__back">
          {/* Content revealed on hover */}
          <h3 className="portfolio-card__back-title">{title}</h3>
          <p className="portfolio-card__back-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;