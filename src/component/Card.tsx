import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card__image" />
      <div className="card__body">
        <h3 className="card__title">Neque volutpat morbi.</h3>
        <p className="card__text">
          Et blandit non sit ac egestas risus non. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam scelerisque posuere vivamus egestas porttitor.
        </p>
        <button className="card__cta">CTA</button>
      </div>
    </div>
  );
};

export default Card;
