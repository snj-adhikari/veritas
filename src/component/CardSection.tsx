import React from 'react';
import Card from './Card';

const CardSection: React.FC = () => {
  return (
    <section className="card-section">
      <div className="card-section__header">
        <h2 className="card-section__title">Aliquat sit amet.</h2>
        <p className="card-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque posuere
          vivamus egestas porttitor. Hendrerit vitae at nulla varius proin ipsum. Purus augue in morbi.
        </p>
      </div>

      <div className="card-section__grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>

      <div className="card-section__footer">
        <button className="card-section__cta-button">CTA</button>
      </div>
    </section>
  );
};

export default CardSection;
