// src/components/Features.js
import React from 'react';
import { FaRobot, FaMobileAlt, FaHeartbeat } from 'react-icons/fa';

const Features = () => {
  const featureData = [
    {
      icon: <FaRobot size={40} className="text-green-500" />,
      title: 'AI-Powered Diagnostics',
      description: 'Leverage artificial intelligence to receive accurate health insights effortlessly.',
    },
    {
      icon: <FaMobileAlt size={40} className="text-blue-500" />,
      title: 'User-Friendly Interface',
      description: 'Navigate our intuitive platform with ease, making healthcare accessible to everyone.',
    },
    {
      icon: <FaHeartbeat size={40} className="text-red-500" />,
      title: 'Real-Time Monitoring',
      description: 'Stay updated with live health data and receive timely notifications for any concerns.',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="flex flex-wrap -mx-4">
          {featureData.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;