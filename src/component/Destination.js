import React from 'react';
import './Destination.css';
import rome from '../Assests/Images/rome.jpeg';
import london from '../Assests/Images/london.jpeg';
import europe from '../Assests/Images/europe.jpeg';

const Destinations = () => {
  return (
    <section className="destinations" id="destinations">
      <h2>Top Destinations</h2>
      <div className="destination-cards">
        <div className="destination-card">
          <img src={rome} alt="Rome" />
          <h3>Rome, Italy</h3>
          <p>$5.4k | 10 Days Trip</p>
        </div>
        <div className="destination-card">
          <img src={london} alt="London" />
          <h3>London, UK</h3>
          <p>$4.2k | 12 Days Trip</p>
        </div>
        <div className="destination-card">
          <img src={europe} alt="Europe" />
          <h3>Full Europe</h3>
          <p>$15k | 28 Days Trip</p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
