// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <form className="max-w-xl mx-auto" netlify>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;