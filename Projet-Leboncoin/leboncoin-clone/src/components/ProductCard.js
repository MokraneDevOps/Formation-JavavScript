// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>{product.price} €</strong></p>
        <button className="buy-button">Acheter</button>
      </div>
    </div>
  );
}

export default ProductCard;
