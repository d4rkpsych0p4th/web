import React from 'react';
import logo from './Logo.jpg'; 
import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
      <img src={logo} alt="Logo de aplicacion" />
    </div>
    );
  }
}

export default Logo;
