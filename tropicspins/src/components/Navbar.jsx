// navbar.js

import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const checkScrollPosition = () => {
    setScrollPosition(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <nav className={scrollPosition > 0 ? 'navbar scrolled' : 'navbar'}>
      <h1 className="logo"><img src="images/1440471238.png" style={{ height: '50px', width: 'auto', filter: 'invert(1)', verticalAlign: 'middle', marginRight: '1em' }}/>Tropic Spins</h1>
      <div className="links">
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
