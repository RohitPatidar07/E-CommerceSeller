import React, { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-vh-100 bg-white">
      {/* Navigation */}
  <nav
  className="fixed-top shadow-sm"
  style={{
    height: "60px",
    background: "linear-gradient(to right, #0f172a, #1e3a8a)",
    zIndex: 1050,
  }}
>
  <div className="container h-100">
    <div className="d-flex justify-content-between align-items-center h-100">

      {/* Logo */}
      <div className="d-flex align-items-center">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center me-3"
          style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(to right, #3b82f6, #2563eb)",
          }}
        >
          <i className="fas fa-cube text-white fs-5"></i>
        </div>
        <h1 className="text-white fs-5 fw-bold m-0">SELLER PRO</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="d-none d-md-flex align-items-center gap-4">
        <a href="#home" className="text-white text-decoration-none small fw-medium">Home</a>
        <a href="#features" className="text-white text-decoration-none small fw-medium">Features</a>
        <a href="#pricing" className="text-white text-decoration-none small fw-medium">Pricing</a>
        <a href="#contact" className="text-white text-decoration-none small fw-medium">Contact</a>
      </div>

      {/* Desktop Login Button */}
      <div className="d-none d-md-block">
        <Link to="/superadmin/dashboard">
          <button
            className="btn text-white px-4 py-2 small fw-medium shadow"
            style={{
              background: "linear-gradient(to right, #60a5fa, #3b82f6)",
              minWidth: "100px",
              border: "none",
            }}
          >
            <i className="fas fa-user-circle me-2"></i>Login
          </button>
        </Link>
       <Link to="/dashboard">
        <button
          className="btn text-white px-4 py-2 small fw-medium shadow"
          style={{
            background: "linear-gradient(to right, #2563eb, #1d4ed8)",
            minWidth: "100px",
          }}
        >
          <i className="fas fa-user-circle me-2"></i>Login
        </button>
       </Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="d-md-none">
        <button
          onClick={toggleMenu}
          className="btn text-white p-2"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} fs-5`}></i>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div
      className="d-md-none bg-dark bg-opacity-95 border-top border-secondary py-3 px-4"
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="d-flex flex-column gap-3">
        <a href="#home" className="text-white text-decoration-none d-flex align-items-center">
          <i className="fas fa-home me-2"></i> Home
        </a>
        <a href="#features" className="text-white text-decoration-none d-flex align-items-center">
          <i className="fas fa-star me-2"></i> Features
        </a>
        <a href="#pricing" className="text-white text-decoration-none d-flex align-items-center">
          <i className="fas fa-tag me-2"></i> Pricing
        </a>
        <a href="#contact" className="text-white text-decoration-none d-flex align-items-center">
          <i className="fas fa-envelope me-2"></i> Contact
        </a>
        <Link to="/superadmin/dashboard">
          <button
            className="btn text-white w-100 mt-3"
            style={{
              background: "linear-gradient(to right, #60a5fa, #3b82f6)",
              border: "none",
            }}
          >
            <i className="fas fa-user-circle me-2"></i>Login
          </button>
        </Link>
      </div>
    </div>
  )}
</nav>



      {/* Hero Section */}
    <section 
  className="position-relative d-flex align-items-center text-white min-vh-100" 
  style={{
    backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20abstract%203D%20geometric%20shapes%20and%20flowing%20lines%20creating%20a%20dynamic%20composition%2C%20deep%20blue%20and%20white%20gradient%20background%20with%20glowing%20elements%2C%20professional%20tech%20visualization%20with%20subtle%20depth%20and%20dimension&width=1440&height=800&seq=hero-bg-003&orientation=landscape')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '80px'
  }}
>
  {/* Gradient Overlay */}
  <div 
    className="position-absolute top-0 start-0 w-100 h-100" 
    style={{ background: 'linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 64, 175, 0.8))' }}
  ></div>

  {/* Content */}
  <div className="container position-relative z-1">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="mb-3">
          <span className="badge bg-info bg-opacity-25 text-info fs-6 px-3 py-2 rounded-pill">
            🚀 Welcome to CentralLogix
          </span>
        </div>

        <h1 className="display-4 fw-bold mb-3 lh-sm">
          Power Your <span className="text-info">Business Growth</span> with Smart Automation
        </h1>

        <p className="lead text-light opacity-75 mb-4">
          CentralLogix helps you manage operations, track analytics, and scale efficiently—all in one powerful platform.
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
          <button className="btn btn-primary btn-lg px-4">
            <i className="fas fa-play me-2"></i> Get Started
          </button>
          <button className="btn btn-outline-light btn-lg px-4">
            <i className="fas fa-eye me-2"></i> Live Demo
          </button>
        </div>

        {/* Feature Tags */}
        <div className="d-flex flex-wrap gap-3">
          <div className="d-flex align-items-center px-3 py-2 bg-white bg-opacity-10 rounded">
            <i className="fas fa-chart-line text-warning me-2"></i>
            <span>Efficiency Boost</span>
          </div>
          <div className="d-flex align-items-center px-3 py-2 bg-white bg-opacity-10 rounded">
            <i className="fas fa-shield-alt text-info me-2"></i>
            <span>Secure Platform</span>
          </div>
          <div className="d-flex align-items-center px-3 py-2 bg-white bg-opacity-10 rounded">
            <i className="fas fa-users text-success me-2"></i>
            <span>10K+ Users</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">Powerful Features</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
              Everything you need to manage your e-commerce operations
              efficiently and scale your business
            </p>
          </div>
          
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div className="w-100 mb-4 overflow-hidden rounded-button" style={{ height: "200px" }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20digital%20dashboard%20interface%20showing%20order%20management%20system%20with%20clean%20charts%20and%20data%20visualization%2C%20minimalist%20design%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20graphics%2C%20organized%20layout&width=300&height=200&seq=feature-01&orientation=landscape"
                    alt="Order Management"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Centralized Order Management
                </h3>
                <p className="text-muted">
                  Manage all your orders from multiple channels in one unified
                  dashboard with real-time updates
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div className="w-100 mb-4 overflow-hidden rounded-button" style={{ height: "200px" }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=interconnected%20network%20of%20shopping%20platforms%20and%20marketplaces%20with%20connection%20lines%2C%20integration%20concept%2C%20modern%20digital%20illustration%2C%20clean%20white%20background%20with%20blue%20accents%2C%20technology%20symbols&width=300&height=200&seq=feature-02&orientation=landscape"
                    alt="Multi-Channel Integration"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Multi-Channel Integration
                </h3>
                <p className="text-muted">
                  Seamlessly connect with Shopify, Amazon, and other major
                  platforms for unified management
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div className="w-100 mb-4 overflow-hidden rounded-button" style={{ height: "200px" }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20analytics%20dashboard%20with%20charts%20graphs%20and%20financial%20reports%2C%20real-time%20data%20visualization%2C%20clean%20professional%20design%2C%20blue%20and%20white%20color%20scheme%2C%20business%20intelligence%20interface&width=300&height=200&seq=feature-03&orientation=landscape"
                    alt="Real-time Analytics"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Real-time Billing & Reports
                </h3>
                <p className="text-muted">
                  Get instant insights with comprehensive analytics and detailed
                  reporting tools for better decisions
                </p>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div className="w-100 mb-4 overflow-hidden rounded-button" style={{ height: "200px" }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=team%20collaboration%20interface%20with%20user%20roles%20and%20permissions%20system%2C%20modern%20workspace%20design%2C%20clean%20dashboard%20layout%2C%20professional%20business%20environment%2C%20blue%20and%20white%20color%20scheme&width=300&height=200&seq=feature-04&orientation=landscape"
                    alt="Role-Based Dashboards"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Role-Based Dashboards
                </h3>
                <p className="text-muted">
                  Customized interfaces for User, Admin, and Super Admin roles
                  with secure access controls
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section 
        id="pricing" 
        className="py-5 position-relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, white, rgba(239, 246, 255, 0.5), white)" }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              background: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)"
            }}
          ></div>
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ 
              background: "radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 50%)"
            }}
          ></div>
        </div>
        
        <div className="container position-relative">
          <div className="text-center mb-5">
            <span 
              className="text-primary px-4 py-1 rounded-button small fw-semibold mb-3 d-inline-block shadow-sm"
              style={{ 
                background: "linear-gradient(to right, #bfdbfe, #bfdbfe)",
                color: "#2563eb"
              }}
            >
              Pricing Plans
            </span>
            <h2 
              className="fw-bold mb-4"
              style={{
                fontSize: "2.75rem",
                background: "linear-gradient(to right, #2563eb, #3b82f6, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
              Choose the perfect plan for your business needs with no hidden
              fees. Start growing with CentralLogix today!
            </p>
          </div>
          
          <div className="row g-4">
            {/* Starter Plan */}
            <div className="col-12 col-md-4">
              <div 
                className="p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer border h-100 hover-translate-up"
                style={{
                  background: "linear-gradient(to bottom right, white, rgba(239, 246, 255, 0.3))",
                  borderColor: "rgba(191, 219, 254, 0.3)"
                }}
              >
                <div className="text-center position-relative">
                  <div 
                    className="position-absolute top-0 start-50 translate-middle bg-gradient rounded-button p-2 opacity-0 hover-opacity-100 transition-opacity shadow"
                    style={{
                      marginTop: "-3rem",
                      background: "linear-gradient(to bottom right, #bfdbfe, #bfdbfe)"
                    }}
                  >
                    <i className="fas fa-rocket text-primary fs-4"></i>
                  </div>
                  <h3 className="text-dark fs-3 fw-bold mb-3">Starter Plan</h3>
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="text-muted small me-2">INR</span>
                      <span className="text-primary fs-1 fw-bold">0</span>
                    </div>
                    <span className="text-muted small">/month</span>
                  </div>
                  <ul className="text-start mb-4" style={{ listStyle: "none", paddingLeft: "0" }}>
                    <li className="d-flex align-items-center mb-3">
                      <div 
                        className="rounded-button me-3 d-flex align-items-center justify-content-center"
                        style={{ 
                          width: "32px", 
                          height: "32px",
                          backgroundColor: "rgba(34, 197, 94, 0.1)"
                        }}
                      >
                        <i className="fas fa-check text-success"></i>
                      </div>
                      <span className="text-muted">Basic order management</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Up to 100 orders/month</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Email support</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Basic reporting</span>
                    </li>
                  </ul>
                  <button 
                    className="w-100 text-white py-3 px-4 rounded-button fw-semibold cursor-pointer transition-all shadow hover-shadow-lg d-flex align-items-center justify-content-center gap-2"
                    style={{
                      background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                      border: "none"
                    }}
                  >
                    <span>Get Started</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Growth Plan */}
            <div className="col-12 col-md-4">
              <div 
                className="p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer position-relative scale-105 hover-translate-up h-100"
                style={{
                  background: "linear-gradient(to bottom right, rgba(37, 99, 235, 0.95), rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.95))"
                }}
              >
                <div className="position-absolute top-0 start-50 translate-middle" style={{ marginTop: "-1rem" }}>
                  <span 
                    className="text-primary px-4 py-1 rounded-button small fw-semibold shadow"
                    style={{ 
                      background: "linear-gradient(to right, #bfdbfe, #bfdbfe)"
                    }}
                  >
                    Most Popular
                  </span>
                </div>
                <div className="text-center position-relative">
                  <div 
                    className="position-absolute top-0 start-50 translate-middle bg-white p-2 rounded-button opacity-0 hover-opacity-100 transition-opacity"
                    style={{ marginTop: "-3rem" }}
                  >
                    <i className="fas fa-crown text-warning fs-4"></i>
                  </div>
                  <h3 className="text-white fs-3 fw-bold mb-3">Growth Plan</h3>
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="text-blue-100 small me-2">INR</span>
                      <span className="text-white fs-1 fw-bold">999</span>
                    </div>
                    <span className="text-blue-100 small">/month</span>
                  </div>
                  <ul className="text-start mb-4" style={{ listStyle: "none", paddingLeft: "0" }}>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Advanced order management</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Unlimited orders</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Multi-channel integration</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Priority support</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Advanced analytics</span>
                    </li>
                  </ul>
                  <button 
                    className="w-100 text-primary bg-white hover-bg-blue-50 py-3 px-4 rounded-button fw-semibold cursor-pointer transition-all shadow hover-shadow-lg d-flex align-items-center justify-content-center gap-2"
                    style={{ border: "none" }}
                  >
                    <span>Choose Plan</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="col-12 col-md-4">
              <div 
                className="p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer border h-100 hover-translate-up"
                style={{
                  background: "linear-gradient(to bottom right, white, rgba(239, 246, 255, 0.3))",
                  borderColor: "rgba(191, 219, 254, 0.3)"
                }}
              >
                <div className="text-center position-relative">
                  <div 
                    className="position-absolute top-0 start-50 translate-middle bg-gradient rounded-button p-2 opacity-0 hover-opacity-100 transition-opacity shadow"
                    style={{
                      marginTop: "-3rem",
                      background: "linear-gradient(to bottom right, #bfdbfe, #bfdbfe)"
                    }}
                  >
                    <i className="fas fa-building text-primary fs-4"></i>
                  </div>
                  <h3 className="text-dark fs-3 fw-bold mb-3">Enterprise Plan</h3>
                  <div className="mb-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span 
                        className="fs-1 fw-bold"
                        style={{
                          background: "linear-gradient(to right, #2563eb, #1e40af)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent"
                        }}
                      >
                        Custom
                      </span>
                    </div>
                    <span className="text-muted small">Tailored for you</span>
                  </div>
                  <ul className="text-start mb-4" style={{ listStyle: "none", paddingLeft: "0" }}>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Custom integrations</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">Dedicated account manager</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">White-label solution</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">24/7 phone support</span>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="fas fa-check text-success me-3"></i>
                      <span className="text-muted">SLA guarantee</span>
                    </li>
                  </ul>
                  <button 
                    className="w-100 text-white py-3 px-4 rounded-button fw-semibold cursor-pointer transition-all shadow hover-shadow-lg d-flex align-items-center justify-content-center gap-2"
                    style={{
                      background: "linear-gradient(to right, #2563eb, #1d4ed8)",
                      border: "none"
                    }}
                  >
                    <span>Contact Sales</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">Get in Touch</h2>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
              Ready to transform your e-commerce operations? Let's discuss how
              CentralLogix can help your business grow.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <form className="d-flex flex-column gap-4">
                <div>
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control rounded-button"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-button"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    className="form-control rounded-button"
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>
                <button 
                  className="btn btn-primary py-3 rounded-button fw-semibold"
                  style={{ border: "none" }}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-4">
                <div className="w-100 overflow-hidden rounded-button" style={{ height: "250px" }}>
                  <img
                    src="https://readdy.ai/api/search-image?query=modern%20professional%20business%20team%20working%20together%20in%20bright%20office%20environment%2C%20collaborative%20workspace%2C%20clean%20minimalist%20design%2C%20people%20using%20computers%20and%20technology%2C%20positive%20atmosphere&width=600&height=300&seq=contact-img&orientation=landscape"
                    alt="Contact Us"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <i className="fas fa-map-marker-alt text-primary fs-4"></i>
                    </div>
                    <div>
                      <p className="text-dark fw-medium mb-1">Office Address</p>
                      <p className="text-muted mb-0">
                        123 Business Street, Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <i className="fas fa-phone text-primary fs-4"></i>
                    </div>
                    <div>
                      <p className="text-dark fw-medium mb-1">Phone</p>
                      <p className="text-muted mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="me-4">
                      <i className="fas fa-envelope text-primary fs-4"></i>
                    </div>
                    <div>
                      <p className="text-dark fw-medium mb-1">Email</p>
                      <p className="text-muted mb-0">hello@centrallogix.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default App;