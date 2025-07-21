import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__content">
        {/* Logo Column */}
        <div className="footer-section__column footer-section__column--logo">
          <h3 className="footer-section__logo">Logo</h3>
          <p className="footer-section__contact-title">Contact us</p>
          <a href="mailto:email@email.com" className="footer-section__contact-info">
            email@email.com
          </a>
          <address className="footer-section__contact-info">
            North Sydney, NSW
          </address>
          <div className="footer-section__social-links">
            {/* These would typically be actual links or icon components */}
            <a href="#" className="footer-section__social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome example */}
            </a>
            <a href="#" className="footer-section__social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i> {/* Font Awesome example */}
            </a>
            <a href="#" className="footer-section__social-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i> {/* Font Awesome example */}
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="footer-section__column">
          <h4 className="footer-section__column-title">Services</h4>
          <ul className="footer-section__list">
            <li className="footer-section__list-item"><a href="#">Auctor volutpat.</a></li>
            <li className="footer-section__list-item"><a href="#">Fermentum turpis.</a></li>
            <li className="footer-section__list-item"><a href="#">Mi consequat.</a></li>
            <li className="footer-section__list-item"><a href="#">Amet venenatis.</a></li>
            <li className="footer-section__list-item"><a href="#">Convallis porttitor.</a></li>
          </ul>
        </div>

        {/* About Column */}
        <div className="footer-section__column">
          <h4 className="footer-section__column-title">About</h4>
          <ul className="footer-section__list">
            <li className="footer-section__list-item"><a href="#">Egestas vitae.</a></li>
            <li className="footer-section__list-item"><a href="#">Viverra lorem ac.</a></li>
            <li className="footer-section__list-item"><a href="#">Eget ac tellus.</a></li>
            <li className="footer-section__list-item"><a href="#">Erat nulla.</a></li>
            <li className="footer-section__list-item"><a href="#">Vulputate proin.</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;