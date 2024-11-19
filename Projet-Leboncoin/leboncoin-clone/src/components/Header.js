// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Connexion</Link>
      </nav>
    </header>
  );
}

export default Header;
