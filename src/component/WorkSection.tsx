import React from 'react';
import WorkCard from './WorkCard';

// Define a type for the WorkCard props for better type checking
interface WorkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[]; // Assuming tags like "Events", "Corporate"
  theme: 'blue' | 'orange'; // To control the border color
}

const OurWorkSection: React.FC = () => {
  // Static data for the work cards
  const workCardsData: WorkCardProps[] = [
    {
      title: 'Sed ut perspiciat is unde is te natus error.',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imageSrc: 'https://via.placeholder.com/300x200', // Replace with your actual image paths
      tags: ['Events', 'Corporate'],
      theme: 'blue',
    },
    {
      title: 'Sed ut perspiciat is unde is te natus error.',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imageSrc: 'https://via.placeholder.com/300x200', // Replace with your actual image paths
      tags: ['Events', 'Corporate'],
      theme: 'orange',
    },
    {
      title: 'Sed ut perspiciat is unde is te natus error.',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imageSrc: 'https://via.placeholder.com/300x200', // Replace with your actual image paths
      tags: ['Events', 'Corporate'],
      theme: 'blue',
    },
    {
      title: 'Sed ut perspiciat is unde is te natus error.',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imageSrc: 'https://via.placeholder.com/300x200', // Replace with your actual image paths
      tags: ['Events', 'Corporate'],
      theme: 'orange',
    },
  ];

  return (
    <section className="our-work-section">
      <div className="our-work-section__header">
        <h2 className="our-work-section__title">Our Work.</h2>
        <p className="our-work-section__description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </p>
      </div>
      <div className="our-work-section__cards-grid">
        {workCardsData.map((card, index) => (
          <WorkCard
            key={index} // In a real application, use a unique ID for the key
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            tags={card.tags}
            theme={card.theme}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;