import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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

const ScrollEndDetector = ({ onScrollEnd }: { onScrollEnd: () => void }) => {
  const scroll = useScroll();
  const hasEnded = useRef(false);

  useFrame(() => {
    // When scroll offset is at the very bottom (1)
    if (scroll?.offset >= 0.999 && !hasEnded.current) {
      onScrollEnd();
      hasEnded.current = true;
    }
    // Optional: re-enable if user scrolls back up
    if (scroll.offset < 0.999 && hasEnded.current) {
        hasEnded.current = false;
    }
  });

  return null;
};

const Cards = () => {
  const groupRef = useRef<import('three').Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      const scrollOffset = scroll.offset;
      // Smooth scroll that reveals 2 cards at a time and focuses on new content
      // Each scroll reveals next pair and moves focus to newly revealed cards
      const totalPairs = Math.ceil(workCardsData.length / 2);
      const scrollProgress = scrollOffset * (totalPairs - 1); // -1 because first pair is always visible
      
      // Move camera to focus on newly revealed content
      // Start at 0, then move down to reveal and focus on new pairs
      groupRef.current.position.y = scrollProgress * 8; // 8 units per pair reveal
    }
  });

  // All cards are treated equally for smooth reveal
  const allCards = workCardsData;

  return (
    <group ref={groupRef}>
      {/* All Cards - Zig-zag layout with progressive reveal */}
      {allCards.map((card, index) => {
        const isLeft = index % 2 === 0;
        // Position cards in rows of 2, starting from top with no initial spacing
        // Each row is 5 units apart vertically for tight spacing
        const row = Math.floor(index / 2);
        const rowMod = index % 2; // 0 for left, 1 for right
        const xPos = isLeft ? -9  + Math.floor(Math.random() * 2) : 3 - Math.floor(Math.random() * 2);
        
       
        const yPos = index === 0 ? 5 : 5 - (row * 4) - (index * 3); // Start at y=0, then go down by 5 units per row

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
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  // Calculate scroll pages - first pair is always visible, remaining pairs need scrolling
  const totalPairs = Math.ceil(workCardsData.length / 2);
  const scrollPages = Math.max(1, totalPairs - 1.8); // -1 because first pair is always visible
  
  return (
    <section className="our-work-section">
      <div className="container">
        <div className="our-work-section__header">
          <h2 className="our-work-section__title">Our Work.</h2>
          <p className="our-work-section__description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="our-work-section__canvas-container">
        <Canvas camera={{ position: [0, 0, 16], fov: 40 }}>
           <ambientLight intensity={1.5} />
           <pointLight position={[10, 10, 10]} intensity={1} />
           {/* Set pages based on pairs to reveal */}
           <ScrollControls 
             pages={scrollPages} 
             damping={0.3}
             horizontal={false}
             distance={1}
             enabled={isScrollEnabled} // Enable/disable scrolling based on state
           >
             <Cards />
           <ScrollEndDetector onScrollEnd={() => setIsScrollEnabled(false)} />

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