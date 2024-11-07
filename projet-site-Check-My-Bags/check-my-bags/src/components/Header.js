import React from 'react';
import './Header.css'; // Assurez-vous de créer un fichier CSS

const Header = () => {
  return (
    <header>
      <nav>
        <div className="headerBox">
          <div className="headerTitle hoverOrange">Voyages</div>
          <img className="headerPen" src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Pen-icon-by-rudezstudio-580x386.jpg" alt="Pen icon" />
        </div>
        <div className="headerBox">
          <ul className="headerList">
            <li className="hoverOrange">Collection</li>
            <li className="hoverOrange">Products</li>
            <li className="hoverOrange">Philosophy</li>
          </ul>
          <img className="headerCart hoverOrange" src="https://svgsilh.com/svg/294547.svg" alt="Cart icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
