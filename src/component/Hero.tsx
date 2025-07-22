import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content container">
        <h1 className="hero__title">
          Bibendum et sit aliquam morendum <br />
          onsectetur adipiscing elit scelerisque.
        </h1>
        <button className="hero__cta">CTA</button>
      </div>
    </section>
  );
};

export default Hero;
