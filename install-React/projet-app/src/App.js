import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Caroussel from './components/Caroussel';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Caroussel />
        <NavBar />
      </main>
    </>
  );
}

export default App;
