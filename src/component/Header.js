import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jadoo</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#steps">Steps</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
      <button className="login-btn">Sign Up</button>
    </header>
  );
};

export default Header;
