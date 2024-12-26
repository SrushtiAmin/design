import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <p>Subscribe to get information, latest news, and other offers.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <p>&copy; 2024 Jadoo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
