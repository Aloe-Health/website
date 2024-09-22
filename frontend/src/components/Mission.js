import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUtensils, FaRegClock } from 'react-icons/fa';

const Mission = () => {
  const featureData = [

    {
      icon: <FaHeartbeat size={40} className="text-red-500" />,
      title: 'Your health',
      description: 'is something you deserve to know about',
    },
    {
      icon: <FaUtensils size={40} className="text-blue-500" />,
      title: 'In the home',
      description: "so we're bringing medical imaging to your kitchen",
    },
    {
      icon: <FaRegClock size={40} className="text-green-500" />,
      title: 'Whenever you want',
      description: "diseases develop quickly so we help you look often",
    }
  ];

  return (
    <section className="snap-start flex items-center justify-center bg-white h-screen">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Your doctor can't see you every week...<br></br>But we can.</h2>
        <div className="flex flex-wrap -mx-4">
          {featureData.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-lg text-center h-full"
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

export default Mission;