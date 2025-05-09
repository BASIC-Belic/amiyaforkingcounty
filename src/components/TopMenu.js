import React from 'react';
import './TopMenu.css';
import Logo from './Logo';
// import HomePage from './HomePage';


const TopMenu = () => { 
  return (  
    <div className="top-menu">
      <div className="logo"><Logo /></div>
      <div className="menu-list">
        {/* <a href="#home"><HomePage /></a> */}
        <a href="#home">Home</a>

        <a href="#donate">Donate</a>
        <a href="#housing">Housing</a>
        <a href="#safety">Safety</a>
        <a href="#education">Education</a>
        <a href="#small-business">Small Business</a>
        <a href="#galley">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </div>  
  );
};

export default TopMenu; 