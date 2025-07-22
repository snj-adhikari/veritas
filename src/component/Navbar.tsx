import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`}>
      <nav className="navbar__container">
        <div className="navbar__logo">
          <span>★ LOGO</span>
        </div>

        <ul className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}>
          <li className="navbar__item">Services</li>
          <li className="navbar__item">Case Studies</li>
          <li className="navbar__item">Our Clients</li>
          <li className="navbar__item">Our Team</li>
          <li className="navbar__item">News & Insights</li>
          <li className="navbar__item">Contact</li>
        </ul>

       <button className="navbar__cta navbar__cta--desktop">CTA</button>

        <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
