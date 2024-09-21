// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Empowering You with Health Insights</h1>
        <p className="text-xl mb-8">
          Discover the future of personal healthcare with advanced diagnostics at your fingertips.
        </p>
        <a href="#contact" className="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;