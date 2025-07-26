// components/Footer.js
import React from "react";

const Footer = () => {
  return (
<footer
  className="pt-5 pb-4 text-white"
  style={{
    background: "linear-gradient(to right, #0f172a, #1e3a8a)",
  }}
>
  <div className="container">
    <div className="row g-4">
      {/* Company Info */}
      <div className="col-12 col-md-6">
        <div className="d-flex align-items-center mb-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(to right, #3b82f6, #2563eb)",
            }}
          >
            <i className="fas fa-cube text-white"></i>
          </div>
          <h3 className="fs-4 fw-bold m-0 text-white">SELLER PRO</h3>
        </div>
        <p className="text-white-50 mb-4" style={{ maxWidth: "30rem" }}>
          Empowering e-commerce businesses with smart, scalable solutions to
          streamline operations and drive growth.
        </p>

        <div className="d-flex gap-3">
          <a href="#" className="text-white text-decoration-none">
            <i className="fab fa-twitter fs-4"></i>
          </a>
          <a href="#" className="text-white text-decoration-none">
            <i className="fab fa-facebook fs-4"></i>
          </a>
          <a href="#" className="text-white text-decoration-none">
            <i className="fab fa-linkedin fs-4"></i>
          </a>
          <a href="#" className="text-white text-decoration-none">
            <i className="fab fa-instagram fs-4"></i>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="col-6 col-md-3">
        <h5 className="fw-semibold mb-3 text-info">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#features" className="text-white-50 text-decoration-none">Features</a></li>
          <li><a href="#pricing" className="text-white-50 text-decoration-none">Pricing</a></li>
          <li><a href="#contact" className="text-white-50 text-decoration-none">Contact</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none">About Us</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="col-6 col-md-3">
        <h5 className="fw-semibold mb-3 text-info">Support</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none">Documentation</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none">API Reference</a></li>
          <li><a href="#" className="text-white-50 text-decoration-none">System Status</a></li>
        </ul>
      </div>
    </div>

    <hr className="border-light border-opacity-25 mt-5" />

    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p className="text-white-50 mb-2 mb-md-0">
        © 2025 CentralLogix. All rights reserved.
      </p>
      <div className="d-flex gap-4">
        <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
        <a href="#" className="text-white-50 text-decoration-none">Terms of Service</a>
        <a href="#" className="text-white-50 text-decoration-none">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
