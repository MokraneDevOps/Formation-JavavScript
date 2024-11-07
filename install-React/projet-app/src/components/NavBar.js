import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="headerBox">
        <div className="headerTitle hoverOrange">Voyages</div>
        <img className="headerPen" src="./pen.svg" alt="Pen icon" />
      </div>
      <div className="headerBox">
        <ul className="headerList">
          <li className="hoverOrange">Collection</li>
          <li className="hoverOrange">Products</li>
          <li className="hoverOrange">Philosophy</li>
        </ul>
        <img className="headerCart hoverOrange" src="./shopping-cart.svg" alt="Shopping cart icon" />
      </div>
    </nav>
  );
}

export default NavBar;
