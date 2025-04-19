import React from 'react';
import logo from './assets/images/logo.jpg';

function Logo() {
    return (
    <img src={logo} className="logo-image" alt="King County Counts Us In!"
        elementtiming="nbf-header-logo-desktop" fetchpriority="high"
        loading="eager" decoding="async" data-loader="raw"/>
    ); 
}

export default Logo;
