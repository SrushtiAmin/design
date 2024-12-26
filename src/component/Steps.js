import React from 'react';
import './Steps.css';

const Steps = () => {
  return (
    <section className="steps" id="steps">
      <h2>Book Your Next Trip in 3 Easy Steps</h2>
      <div className="steps-content">
        <div className="step">
          <h3>1. Choose Destination</h3>
          <p>Choose your favorite destination from the options provided.</p>
        </div>
        <div className="step">
          <h3>2. Make Payment</h3>
          <p>Pay securely with our reliable payment methods.</p>
        </div>
        <div className="step">
          <h3>3. Reach Airport</h3>
          <p>Get to the airport on the selected date for your journey.</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
