import React from 'react';
import './Hero.css';
import travel from '../Assests/Images/travel.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>Best destinations around the world for a lifetime experience.</p>
        <div className="hero-buttons">
          <button className="find-btn">Find Out More</button>
          <button className="play-btn">Play Demo</button>
        </div>
      </div>
      <img className="hero-image" src={travel} alt="Travel" />
    </section>
  );
};

export default Hero;
