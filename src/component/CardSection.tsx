import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, useScroll, Html } from '@react-three/drei';
import Card from './Card';

const CARD_COUNT = 12;
const CARDS_PER_PAGE = 4;
const CONTAINER_HEIGHT = 1200; // px, adjust as needed
const CARD_HEIGHT = 180; // px, adjust as needed

const Cards = () => {
  const groupRef = useRef<import('three').Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      const scrollOffset = scroll.offset;
      // Smooth scroll that reveals cards progressively
      const totalSets = Math.ceil(CARD_COUNT / CARDS_PER_PAGE);
      const scrollProgress = scrollOffset * (totalSets - 1);
      
      // Move camera to focus on newly revealed content
      groupRef.current.position.y = scrollProgress * 8;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: CARD_COUNT }).map((_, index) => {
        const isLeft = index % 2 === 0;
        const random = Math.floor(Math.random() * CARD_COUNT);
        const imageUrl = `https://picsum.photos/500/500?nature&sig=${index}`;
        const dummyTexts = [
          "Explore the beauty of nature through our lens. Each moment captured tells a unique story of our world.",
          "Discover hidden gems and breathtaking landscapes that inspire wonder and adventure.",
          "Journey through time and space with our curated collection of memorable moments.",
          "Experience the world from a different perspective, where every image tells a thousand words."
        ];
        const randomText = dummyTexts[Math.floor(Math.random() * dummyTexts.length)];
        const row = Math.floor(index / 2);
        // Random x position within bounds
        const xPos = isLeft ? -5 + Math.floor(Math.random() * 2) : 2 - Math.floor(Math.random() * 2);
        
        const yPos = index === 0 ? 4 : 4 - row * 2 - index ;

        return (
          <Html key={index} position={[xPos, yPos, 0]} className="cards-section__wrapper">
            <Card 
              imageUrl={imageUrl}
              title={`Card ${index + 1}`}
              text={randomText}
            />
          </Html>
        );
      })}
    </group>
  );
};

const CardSection: React.FC = () => {
  // Calculate scroll pages based on card count
  const totalSets = Math.ceil(CARD_COUNT / CARDS_PER_PAGE);
  const scrollPages = Math.max(1, totalSets - 1);

  return (
    <section className="card-section" style={{ height: CONTAINER_HEIGHT }}>
      <div className="card-section__header">
        <h2 className="card-section__title">Aliquat sit amet.</h2>
        <p className="card-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere
          vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.
        </p>
      </div>
      <div className="card-section__canvas-container" style={{ height: CONTAINER_HEIGHT - 200 }}>
        <Canvas camera={{ position: [0, 0, 16], fov: 30 }}>
          <ScrollControls pages={scrollPages} damping={0.2}>
            <Cards />
          </ScrollControls>
        </Canvas>
      </div>
    </section>
  );
};

export default CardSection;
