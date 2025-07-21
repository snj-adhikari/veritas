import React from 'react';
import PortfolioCard from './PortfolioCard'; // Import the PortfolioCard component

// Define a type for the PortfolioCard props for better type checking
interface PortfolioCardProps {
  imageSrc: string; // The image to display
  title: string; // Title for the revealed content
  description: string; // Description for the revealed content
  flippedInitially?: boolean; // Optional prop to control initial state if needed
}

const PortfolioSection: React.FC = () => {
  // Static data for the portfolio cards
  const portfolioCardsData: PortfolioCardProps[] = [
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+1', // Replace with your actual image paths
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+2',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+3',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+4',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+5',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+6',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+7',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: 'https://via.placeholder.com/200x200?text=Image+8',
      title: 'Neque volutpat morbi sed.',
      description: 'Et blandit non elit ac egestas risus non.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-section__left-column">
        <h2 className="portfolio-section__title">Aliquat sit amet.</h2>
        <p className="portfolio-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque
          posuere vivamus egestas porttitor. Hendrerit vitae at nulla varius proin
          ipsum. Purus augue in morbi.
        </p>
        <button className="portfolio-section__cta-button">CTA</button>
      </div>
      <div className="portfolio-section__right-column">
        <div className="portfolio-section__grid">
          {portfolioCardsData.map((card, index) => (
            <PortfolioCard
              key={index} // In a real application, use a unique ID for the key
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="portfolio-section__corner-icon">F</div> {/* Assuming "F" is a static design element */}
      </div>
    </section>
  );
};

export default PortfolioSection;