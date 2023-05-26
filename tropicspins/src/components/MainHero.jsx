// MainHero.jsx

import React from 'react';
import './MainHero.css';
import SocialLinks from './SocialLinks';

const MainHero = () => {
  return (
    <div className="main-hero">
      <div className="text-container">
        <h1 className="header-text">Innovating the next generation of yoyos.</h1>
        <p className="description-text">
            We're Tropic Spins, a yo-yo company striving to give back to the community that helped us navigate life's ups and downs.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default MainHero;
