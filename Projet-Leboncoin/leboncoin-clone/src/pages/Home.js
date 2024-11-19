// src/pages/Home.js
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue sur Leboncoin</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
