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
      imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Creative Branding',
      description: 'Brand identity and logo design for modern businesses.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Web Development',
      description: 'Responsive websites built with the latest technologies.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      title: 'Photography',
      description: 'Professional photography for products and events.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=400&q=80',
      title: 'UI/UX Design',
      description: 'User-centered design for web and mobile applications.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
      title: 'App Development',
      description: 'Custom mobile apps for iOS and Android platforms.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      title: 'Digital Marketing',
      description: 'SEO, SEM, and social media marketing strategies.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=400&q=80',
      title: 'Content Creation',
      description: 'Engaging content for blogs, websites, and social media.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      title: 'Video Production',
      description: 'High-quality video production and editing services.',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      title: 'Consulting',
      description: 'Expert advice to grow your business and brand.',
    },
  ];

  const firstColumnCards = portfolioCardsData.slice(0, 3);
  const secondColumnCards = portfolioCardsData.slice(3, 6);
  const thirdColumnCards = portfolioCardsData.slice(6, 8);
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
          <div className="portfolio-section__grid-wrapper">
            {firstColumnCards.map((card, index) => (
              <PortfolioCard
                key={index} // In a r`eal application, use a unique ID for the key
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="portfolio-section__grid-wrapper margin-top-2">
            {secondColumnCards.map((card, index) => (
              <PortfolioCard
                key={index} // In a r`eal application, use a unique ID for the key
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="portfolio-section__grid-wrapper margin-top-3">
            {thirdColumnCards.map((card, index) => (
              <PortfolioCard
                key={index} // In a r`eal application, use a unique ID for the key
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;