import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdDetail from './pages/AdDetail';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ad/:id" element={<AdDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
