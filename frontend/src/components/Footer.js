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


        <p className="flex items-center justify-center">
          <img
            src="/images/logo/64logo.png"
            alt="Aloe Icon"
            className="m-1 w-8 h-8" // Adjust size as needed
          />
        </p>
        <br></br>
        <p>{new Date().getFullYear()} &copy; aloe health </p>
        {/* <br></br> */}
        <p>All rights reserved.</p>
        <div className="mt-4">
          {/* Social Media Icons can be added here */}
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;