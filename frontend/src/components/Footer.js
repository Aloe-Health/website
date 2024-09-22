// src/components/sections/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="snap-start flex items-center justify-center bg-gray-800 text-gray-300 h-screen">
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>&copy; {new Date().getFullYear()} aloe. All rights reserved.</p>
        <div className="mt-4">
          {/* Social Media Icons can be added here */}
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;