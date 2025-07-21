import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <div className="navbar__logo">
          <span>★ LOGO</span>
        </div>

        <ul className="navbar__nav">
          <li className="navbar__item">Services</li>
          <li className="navbar__item">Case Studies</li>
          <li className="navbar__item">Our Clients</li>
          <li className="navbar__item">Our Team</li>
          <li className="navbar__item">News & Insights</li>
          <li className="navbar__item">Contact</li>
        </ul>

        <button className="navbar__cta">CTA</button>
      </nav>
    </header>
  );
};

export default Navbar;
