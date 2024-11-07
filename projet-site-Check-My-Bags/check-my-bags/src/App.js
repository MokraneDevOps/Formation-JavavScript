import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import TravelService from './components/TravelService';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Carousel /> 
      <TravelService />
    </div>
  );
};

export default App;
