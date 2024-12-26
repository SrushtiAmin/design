import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What People Say About Us</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"The trip was wonderful, and everything was well-organized."</p>
          <h4>John Doe</h4>
        </div>
        <div className="testimonial-card">
          <p>"Best travel experience ever. Highly recommend Jadoo!"</p>
          <h4>Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
