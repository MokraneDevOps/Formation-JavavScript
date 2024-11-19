// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Leboncoin</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/cart">Panier</Link>
      </nav>
    </header>
  );
};

export default Header;
