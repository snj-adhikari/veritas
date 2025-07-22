import React from 'react';
import logo from './logo.svg';
import '../style/app.scss';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import CardSection from '../component/CardSection';
import OurWorkSection from '../component/WorkSection';
import PortfolioSection from '../component/PorfolioSection';
import ContactSection from '../component/ContactCard';
import FooterSection from '../component/Footer';
import WorkAnimation from '../component/WorkAnimation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <div className="container">
        <CardSection/>
        
      </div>
            <WorkAnimation/>
      <div className="container">
        <PortfolioSection/>
      </div>

      <OurWorkSection/>
      <ContactSection/>
        <WorkAnimation/>
      <FooterSection/>
    </div>
  );
}

export default App;
