// src/App.js
import React from 'react';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App snap-y snap-mandatory overflow-y-scroll h-screen">
      <Hero />
      <Mission />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;