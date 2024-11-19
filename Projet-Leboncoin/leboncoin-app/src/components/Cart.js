// src/components/Cart.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Votre Panier</h2>
      {cartItems.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.price} €</span>
                <button onClick={() => onRemoveFromCart(item.id)}>Retirer</button>
              </li>
            ))}
          </ul>
          <h3>Total: {total} €</h3>
          <Link to="/checkout">
            <button>Passer à la caisse</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
