import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import "./cssComponents/header.css"

const HeaderComponent = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header style={{backgroundColor:'rgba(255,255,255,0.15)', width:'100%', paddingLeft: '10%', paddingRight: '10%', paddingBottom:'1rem', marginBottom: '2rem'}}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul className={showDropdown ? 'dropdown-content' : ''}>
          <li className={location.pathname === '' ? 'active' : ''}>
            <Link to="">Início</Link>
          </li>
          <li className={location.pathname === '/watchfolioWeb' ? 'active' : ''}>
            <Link to="/watchfolioWeb">Watchfolio WEB (PROTOTIPO)</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/sobre">Watchfolio MOBILE (PROTOTIPO)</Link>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleDropdown}>
          &#9776;
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;