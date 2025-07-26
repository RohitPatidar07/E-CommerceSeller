import Footer from "./Footer";
import Navbar from "./Navbar";
import React from 'react';
import { FaShippingFast, FaClipboardList, FaBell, FaCalendarAlt, FaUndoAlt, FaChartLine } from 'react-icons/fa';
const Features = () => {
  const features = [
    {
      icon: <FaClipboardList size={28} />,
      title: 'Centralized Order Management',
      description: 'Track and manage all your marketplace and D2C orders from one powerful dashboard.',
    },
    {
      icon: <FaShippingFast size={28} />,
      title: 'Smart Courier Assignment',
      description: 'Auto-assign delivery partners by pin code, cost, weight, or custom business rules.',
    },
    {
      icon: <FaBell size={28} />,
      title: 'Real-Time Notifications',
      description: 'Send automated SMS/email alerts to customers for each step of the delivery journey.',
    },
    {
      icon: <FaCalendarAlt size={28} />,
      title: 'Automated Delivery Scheduling',
      description: 'Plan and optimize delivery routes to reduce delays and ensure timely deliveries.',
    },
    {
      icon: <FaUndoAlt size={28} />,
      title: 'Returns & SLA Monitoring',
      description: 'Identify failed deliveries, SLA breaches, and handle returns with ease.',
    },
    {
      icon: <FaChartLine size={28} />,
      title: 'Advanced Reporting & Analytics',
      description: 'Get actionable insights with real-time dashboards and downloadable reports.',
    },
  ];
  return (
    <div className="min-vh-100 bg-white pt-5">
      <Navbar/>
      <div className="container">
      <section id="features" className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="text-dark fs-1 fw-bold mb-3">Manage Every Order & Delivery – Seamlessly</h2>
      <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
        Everything your growing e-commerce business needs to stay on top of operations, logistics, and customer experience.
      </p>
    </div>
    
    <div className="row g-4">
      {/* Feature 1 */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
          <div className="w-100 mb-4 overflow-hidden rounded" style={{ height: "200px" }}>
            <img
              src="https://cdn.dribbble.com/userupload/32092271/file/original-51fd44bf3f1d50cf606a7d5b440557bb.jpg?resize=1504x1240&vertical=center"
              alt="Centralized Order Dashboard"
              className="w-100 h-100 object-cover object-top"
            />
          </div>
          <h3 className="text-dark fs-5 fw-semibold mb-2">Centralized Order Dashboard</h3>
          <p className="text-muted">
            Sync and manage orders from Shopify, Amazon, Flipkart & more — all in one intuitive dashboard.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
          <div className="w-100 mb-4 overflow-hidden rounded" style={{ height: "200px" }}>
            <img
              src="https://www.myrouteonline.com/wp-content/uploads/2023/02/Mapping-Delivery-Routes.png"
              alt="Smart Delivery Mapping"
              className="w-100 h-100 object-cover object-top"
            />
          </div>
          <h3 className="text-dark fs-5 fw-semibold mb-2">Smart Delivery Mapping</h3>
          <p className="text-muted">
            Auto-assign delivery partners (Delhivery, Bluedart, etc.) based on pin codes, weight, and zones.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
          <div className="w-100 mb-4 overflow-hidden rounded" style={{ height: "200px" }}>
            <img
              src="https://desk.zoho.com/DocsDisplay?zgId=35998097&mode=inline&blockId=2bhlw220a8043687e4608b1a4795b6e460612"
              alt="Live Notifications"
              className="w-100 h-100 object-cover object-top"
            />
          </div>
          <h3 className="text-dark fs-5 fw-semibold mb-2">Live Customer Notifications</h3>
          <p className="text-muted">
            Automatically notify customers via SMS/email from order dispatch to doorstep delivery.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
          <div className="w-100 mb-4 overflow-hidden rounded" style={{ height: "200px" }}>
            <img
              src="https://cdn.shopify.com/app-store/listing_images/6c41746742816eee2d14fccf54b1ea18/promotional_image/CL_SlMXR0IcDEAE=.jpeg?height=720&quality=90&width=1280"
              alt="Advanced Reporting"
              className="w-100 h-100 object-cover object-top"
            />
          </div>
          <h3 className="text-dark fs-5 fw-semibold mb-2">Advanced Reports & Analytics</h3>
          <p className="text-muted">
            Track delivery SLAs, returns, and order delays — make smarter decisions with data-driven dashboards.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="features" className="py-5 bg-light">
  <div className="container">
    <header className="text-center mb-5">
      <h6 className="text-dark display-5 fw-semibold">
        Powerful Features to Supercharge Your <span className="text-primary">E-Commerce Operations</span>
      </h6>
      <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "42rem" }}>
        Discover how CentralLogix helps you manage orders, automate deliveries, and optimize performance — all in one intelligent dashboard.
      </p>
    </header>

    <div className="row g-4">
      {/* Feature 1 */}
      <div className="col-md-6 col-lg-4">
        <article className="bg-white p-4 rounded-4 shadow-sm h-100 feature-box animate-fade-up">
          <div className="mb-3">
            <i className="bi bi-ui-checks-grid fs-2 text-primary"></i>
          </div>
          <h3 className="fs-5 fw-semibold text-dark">Centralized Order Management</h3>
          <p className="text-muted">
            Manage thousands of orders across Amazon, Shopify, Flipkart & more using a unified dashboard with bulk action support.
          </p>
        </article>
      </div>

      {/* Feature 2 */}
      <div className="col-md-6 col-lg-4">
        <article className="bg-white p-4 rounded-4 shadow-sm h-100 feature-box animate-fade-up">
          <div className="mb-3">
            <i className="bi bi-truck fs-2 text-primary"></i>
          </div>
          <h3 className="fs-5 fw-semibold text-dark">Smart Delivery Scheduling</h3>
          <p className="text-muted">
            Automate courier selection based on pin codes, weight, zones & SLAs — improving efficiency & reducing costs.
          </p>
        </article>
      </div>

      {/* Feature 3 */}
      <div className="col-md-6 col-lg-4">
        <article className="bg-white p-4 rounded-4 shadow-sm h-100 feature-box animate-fade-up">
          <div className="mb-3">
            <i className="bi bi-bell-fill fs-2 text-primary"></i>
          </div>
          <h3 className="fs-5 fw-semibold text-dark">Real-Time Notifications</h3>
          <p className="text-muted">
            Notify customers instantly via SMS/email for shipping, delivery, and delays — boosting satisfaction & reducing support calls.
          </p>
        </article>
      </div>

      {/* Feature 4 */}
      <div className="col-md-6 col-lg-4">
        <article className="bg-white p-4 rounded-4 shadow-sm h-100 feature-box animate-fade-up">
          <div className="mb-3">
            <i className="bi bi-graph-up-arrow fs-2 text-primary"></i>
          </div>
          <h3 className="fs-5 fw-semibold text-dark">Advanced Analytics</h3>
          <p className="text-muted">
            Monitor order delays, SLA breaches, and returns using real-time dashboards and data-driven insights.
          </p>
        </article>
      </div>

      {/* Feature 5 */}
      <div className="col-md-6 col-lg-4">
        <article className="bg-white p-4 rounded-4 shadow-sm h-100 feature-box animate-fade-up">
          <div className="mb-3">
            <i className="bi bi-gear-fill fs-2 text-primary"></i>
          </div>
          <h3 className="fs-5 fw-semibold text-dark">Custom Automation Rules</h3>
          <p className="text-muted">
            Set up intelligent business rules for routing, escalation, tracking and escalation — no code required.
          </p>
        </article>
      </div>

      {/* Feature 6 */}
      <div className="col-md-6 col-lg-4">
        <article className="bg-white p-4 rounded-4 shadow-sm h-100 feature-box animate-fade-up">
          <div className="mb-3">
            <i className="bi bi-shield-check fs-2 text-primary"></i>
          </div>
          <h3 className="fs-5 fw-semibold text-dark">Secure & Scalable</h3>
          <p className="text-muted">
            Enterprise-grade architecture that scales with your business. Secure, GDPR-compliant, and cloud-optimized.
          </p>
        </article>
      </div>
    </div>

    <div className="text-center mt-5">
      <a
        href="#demo"
        className="btn btn-primary px-5 py-3 fs-6 fw-semibold rounded-pill"
        aria-label="Book a Free Demo"
      >
        Book a Free Demo
      </a>
    </div>
  </div>
</section>

      </div>
      <Footer/>
    </div>

  );
};

export default Features;