import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed-top bg-dark shadow-lg z-50" style={{ height: "80px" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center h-100">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div 
              className="bg-gradient rounded-button me-3 d-flex align-items-center justify-content-center" 
              style={{ 
                width: "40px", 
                height: "40px",
                background: "linear-gradient(to right, #2563eb, #1d4ed8)"
              }}
            >
              <i className="fas fa-cube text-white fs-4"></i>
            </div>
            <h1 className="text-white fs-3 fw-bold m-0">CentralLogix</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-block">
            <div className="d-flex align-items-center" style={{ gap: "2rem" }}>
              <a href="#home" className="text-white-80 hover-text-white px-3 py-2 text-decoration-none small fw-medium cursor-pointer transition-all">
                Home
              </a>
              <a href="#features" className="text-white-80 hover-text-white px-3 py-2 text-decoration-none small fw-medium cursor-pointer transition-all">
                Features
              </a>
              <a href="#pricing" className="text-white-80 hover-text-white px-3 py-2 text-decoration-none small fw-medium cursor-pointer transition-all">
                Pricing
              </a>
              <a href="#contact" className="text-white-80 hover-text-white px-3 py-2 text-decoration-none small fw-medium cursor-pointer transition-all">
                Contact
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="d-none d-md-block">
            <button 
              className="text-white px-4 py-2 small fw-medium rounded-button cursor-pointer transition-all shadow hover-shadow"
              style={{
                background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                border: "none",
                minWidth: "100px"
              }}
            >
              <i className="fas fa-user-circle me-2"></i>
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="d-md-none">
            <button
              onClick={toggleMenu}
              className="text-white hover-text-white-80 cursor-pointer p-2 rounded-button border-0"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} fs-5`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="d-md-none bg-dark-90 backdrop-blur border-top border-gray-700 p-3">
          <div className="d-flex flex-column gap-2">
            <a href="#home" className="text-white-90 hover-text-white hover-bg-white-10 px-4 py-3 text-decoration-none base fw-medium cursor-pointer rounded-button transition-all d-flex align-items-center">
              <i className="fas fa-home me-3"></i>Home
            </a>
            <a href="#features" className="text-white-90 hover-text-white hover-bg-white-10 px-4 py-3 text-decoration-none base fw-medium cursor-pointer rounded-button transition-all d-flex align-items-center">
              <i className="fas fa-star me-3"></i>Features
            </a>
            <a href="#pricing" className="text-white-90 hover-text-white hover-bg-white-10 px-4 py-3 text-decoration-none base fw-medium cursor-pointer rounded-button transition-all d-flex align-items-center">
              <i className="fas fa-tag me-3"></i>Pricing
            </a>
            <a href="#contact" className="text-white-90 hover-text-white hover-bg-white-10 px-4 py-3 text-decoration-none base fw-medium cursor-pointer rounded-button transition-all d-flex align-items-center">
              <i className="fas fa-envelope me-3"></i>Contact
            </a>
            <button 
              className="text-white px-4 py-3 fw-medium rounded-button cursor-pointer w-100 mt-2 transition-all d-flex align-items-center justify-content-center"
              style={{
                background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                border: "none"
              }}
            >
              <i className="fas fa-user-circle me-2"></i>
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;