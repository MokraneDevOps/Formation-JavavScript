import React from "react";
import "./Header.css";

const Header = ({ user }) => {
  return (
    <header>
      <h1>Bienvenue {user}</h1>
      <nav>
        <a href="/">Offres</a>
        <a href="/publish">Publier</a>
        <a href="/signup">S'inscrire</a>
      </nav>
    </header>
  );
};

export default Header;
