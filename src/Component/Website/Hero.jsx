import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-vh-100 bg-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
      
      <style jsx>{`
        .rounded-button {
          border-radius: 8px;
        }
        
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input[type="number"] {
          -moz-appearance: textfield;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .hover-text-white:hover {
          color: white !important;
        }
        
        .hover-bg-white-10:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
        
        .hover-shadow-lg:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
        }
        
        .hover-translate-up:hover {
          transform: translateY(-4px);
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .hover-opacity-100:hover {
          opacity: 1 !important;
        }
        
        .text-white-80 {
          color: rgba(255, 255, 255, 0.8);
        }
        
        .text-white-90 {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .text-blue-100 {
          color: #bfdbfe;
        }
        
        .text-blue-200 {
          color: #93c5fd;
        }
        
        .bg-dark-90 {
          background-color: rgba(31, 41, 55, 0.95);
        }
        
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        
        .object-cover {
          object-fit: cover;
        }
        
        .object-top {
          object-position: top;
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .hover-bg-blue-50:hover {
          background-color: #eff6ff !important;
        }
      `}</style>
    </div>
  );
};

export default Home;