import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { ScrollControls, useScroll, Html } from '@react-three/drei';
import WorkCard from './WorkCard';

interface WorkCardData {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  theme: 'blue' | 'orange';
}

const workCardsData: WorkCardData[] = [
    {
      id: 1,
      title: 'Featured Project Showcase',
      description: 'A deep dive into our collaboration with a leading tech firm to redefine their digital event presence.',
      imageSrc: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&q=80',
      tags: ['Events', 'Corporate'],
      theme: 'orange',
    },
    {
      id: 2,
      title: 'Brand Identity Overhaul',
      description: 'We crafted a new, vibrant brand identity for a startup, capturing their innovative spirit.',
      imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80',
      tags: ['Branding', 'Startups'],
      theme: 'blue',
    },
    {
      id: 3,
      title: 'Interactive Web Experience',
      description: 'An immersive website designed to engage users and drive conversions for an e-commerce client.',
      imageSrc: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&q=80',
      tags: ['Web', 'E-commerce'],
      theme: 'orange',
    },
    {
      id: 4,
      title: 'National Marketing Campaign',
      description: 'Spearheaded a multi-platform campaign that resulted in a 200% increase in customer engagement.',
      imageSrc: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80',
      tags: ['Marketing', 'Campaign'],
      theme: 'blue',
    },
    {
      id: 5,
      title: 'E-commerce Platform Launch',
      description: 'Successfully launched a new e-commerce platform, leading to a 150% increase in online sales.',
      imageSrc: 'https://images.unsplash.com/photo-1561736778-92e52a7769cb?w=500&q=80',
      tags: ['E-commerce', 'Retail'],
      theme: 'orange',
    },
    {
      id: 6,
      title: 'Mobile App Redesign',
      description: 'Redesigned a popular mobile app, improving user retention by 40% and engagement by 60%.',
      imageSrc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&q=80',
      tags: ['Mobile', 'UX/UI'],
      theme: 'blue',
    },
];

const Cards = () => {
  const groupRef = useRef<import('three').Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (groupRef.current && workCardsData.length > 4) {
      // Only apply scroll animation if there are more than 4 cards
      const scrollOffset = Math.max(0, scroll.offset);
      // Adjust the multiplier to control scroll speed and distance
      groupRef.current.position.y = scrollOffset * -20;
    }
  });

  const staticCards = workCardsData.slice(0, 4);
  const scrollingCards = workCardsData.slice(4);

  return (
    <group ref={groupRef}>
      {/* Static Cards - 2x2 Layout */}
      {staticCards.map((card, index) => {
        const isLeft = index % 2 === 0;
        const xPos = isLeft ? -4 : 4;
        // Place first two cards on the top row, next two on the second row
        const yPos = index < 2 ? 0 : -8;
        return (
          <Html key={card.id} position={[xPos, yPos, 0]} className="card-wrapper">
            <WorkCard {...card} />
          </Html>
        );
      })}

      {/* Scrolling Cards - Zig-zag layout */}
      {scrollingCards.map((card, index) => {
        const isLeft = (staticCards.length + index) % 2 === 0;
        const xPos = isLeft ? -4 : 4;
        // Position scrolling cards below the static ones
        const yPos = -16 - index * 8;
        return (
          <Html key={card.id} position={[xPos, yPos, 0]} className="card-wrapper">
            <WorkCard {...card} />
          </Html>
        );
      })}
    </group>
  );
};

const OurWorkSection: React.FC = () => {
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
      <div className="our-work-section__canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
           <ambientLight intensity={1.5} />
           <pointLight position={[10, 10, 10]} intensity={1} />
           {/* Set pages based on the number of scrolling cards */}
           <ScrollControls pages={workCardsData.length > 4 ? (workCardsData.length - 4) * 0.5 : 0} damping={0.25}>
             <Cards />
           </ScrollControls>
        </Canvas>
      </div>
      <div className="our-work-section__cta-container">
        <button className="our-work-section__cta-button">
          Let's Work Together
        </button>
      </div>
    </section>
  );
};

export default OurWorkSection;