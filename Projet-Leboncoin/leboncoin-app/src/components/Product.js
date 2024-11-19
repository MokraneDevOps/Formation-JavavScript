// src/components/Product.js

import React from 'react';
import './Product.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price} €</span>
      <button onClick={() => onAddToCart(product)}>Ajouter au panier</button>
    </div>
  );
};

export default Product;
