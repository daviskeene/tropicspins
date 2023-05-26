import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Tropic Spins Yoyo Company</p>
    </footer>
  );
};

export default Footer;