// src/components/sections/Features.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMobileAlt, FaHeartbeat, FaCommentMedical, FaWaveSquare } from 'react-icons/fa';

const Technology = () => {
  const featureData = [
    {
      icon: <FaWaveSquare size={40} className="text-blue-500" />,
      title: 'Accessible Ultrasound',
      description: "we plan to become the first company to offer ultrasound devices for the home",
    },
    {
      icon: <FaRobot size={40} className="text-green-500" />,
      title: 'AI-Powered Insights',
      description: 'using the latest deep learning models we\'ll pull out key metrics and long-term trends',
    },
    {
      icon: <FaHeartbeat size={40} className="text-red-500" />,
      title: 'Back to the Public',
      description: 'people deserve to know how their health is changing, whenever they want',
    },
  ];

  return (
    <section className="snap-start flex items-center justify-center bg-gray-100 h-screen">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Your doctor can't see you every week but we can...</h2>
        <div className="flex flex-wrap -mx-4">
          {featureData.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Technology;