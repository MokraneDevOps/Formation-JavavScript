// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import { products } from './data';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            {products.map(product => (
              <Product key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        } />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckoutForm total={total} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
