import React from 'react';
import './Services.css';
import weather from '../Assests/Images/weather.jpeg';
import flight from '../Assests/Images/flight.jpeg';
import events from '../Assests/Images/events.jpeg';
import setting from '../Assests/Images/setting.jpeg';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>We Offer Best Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src={weather} alt="Weather" />
          <h3>Calculated Weather</h3>
          <p>Information about local weather conditions.</p>
        </div>
        <div className="service-card">
          <img src={flight} alt="Flights" />
          <h3>Best Flights</h3>
          <p>Affordable and reliable flight options.</p>
        </div>
        <div className="service-card">
          <img src={events} alt="Events" />
          <h3>Local Events</h3>
          <p>Find exciting events happening nearby.</p>
        </div>
        <div className="service-card">
          <img src={setting} alt="Customization" />
          <h3>Customization</h3>
          <p>Tailored packages for every traveler.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
