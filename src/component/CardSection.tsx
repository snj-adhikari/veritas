import React, { useState } from 'react';
import Card from './Card';

const CARD_COUNT = 12;
const CARDS_PER_ROW = 2;
const INITIAL_ROWS = 2; // Show 2 rows initially (4 cards)

const CardSection: React.FC = () => {
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);

  const handleShowMore = () => {
    setVisibleRows((prevRows) => {
      const newRowCount = prevRows + 1;
      const maxRows = Math.ceil(CARD_COUNT / CARDS_PER_ROW);
      return Math.min(newRowCount, maxRows);
    });
  };

  const cardsToShow = visibleRows * CARDS_PER_ROW;
  const allCardsShown = cardsToShow >= CARD_COUNT;

  return (
    <section className="card-section">
      <div className="card-section__header">
        <div className="card-section__header-content">
            <h2 className="card-section__title">Aliquat sit amet.</h2>
            <p className="card-section__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere
              vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.
            </p>
        </div>

        <div className="card-section__header-card">
            <Card
              imageUrl="https://source.unsplash.com/random/500x500?nature"
              title="Card Section Header"
              text="This is a header card that introduces the section. It can be used to highlight
              important information or showcase a featured item."
              ySpacing={0}
              xSpacing={0}
            />
        </div>
        
      </div>
      <div className='card-section__canvas-container'>
        <div className="card-section__grid">
          {Array.from({ length: Math.min(cardsToShow, CARD_COUNT) }).map((_, index) => {
            const imageUrl = `https://source.unsplash.com/random/500x500?nature&sig=${index}`;
            const dummyTexts = [
              "Explore the beauty of nature through our lens. Each moment captured tells a unique story of our world.",
              "Discover hidden gems and breathtaking landscapes that inspire wonder and adventure.",
              "Journey through time and space with our curated collection of memorable moments.",
              "Experience the world from a different perspective, where every image tells a thousand words."
            ];
            const randomText = dummyTexts[Math.floor(Math.random() * dummyTexts.length)];
            const rowNo = index % 2 ;
            const isLeft = index % 2 === 0;
            const rightColumn = isLeft ? 0 : 80;
            const randomSpacing = Math.floor(Math.random() * 10) * 15;
            return (
              <div key={index} className="card-wrapper">
                <Card 
                  imageUrl={imageUrl}
                  title={`Card ${index + 1}`}
                  ySpacing={rowNo * 40   + rightColumn}
                  xSpacing={randomSpacing}
                  text={randomText}
                />
              </div>
            );
          })}
        </div>
      </div>
      {!allCardsShown && (
        <div className="card-section__navigation">
          <button onClick={handleShowMore}>
            &darr;
          </button>
        </div>
      )}
    </section>
  );
};

export default CardSection;
