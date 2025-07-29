import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../../config";
import axios from "axios";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlans = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL}plan`);

      const transformedData = res.data.data.map((item) => ({
        id: item._id,
        name: item.name,
        priceMonthly: item.priceMonthly,
        priceYearly: item.priceYearly,
        description: item.description, // Should be an array
        status: "Active",
        subscribers: Math.floor(Math.random() * 10000),
      }));

      setPlans(transformedData);
      setError(null);
    } catch (err) {
      console.error("Error fetching plan data", err);
      setError("Failed to load plans. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-vh-100 bg-white ">
      <Navbar />
      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center text-white min-vh-100"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=modern%20abstract%203D%20geometric%20shapes%20and%20flowing%20lines%20creating%20a%20dynamic%20composition%2C%20deep%20blue%20and%20white%20gradient%20background%20with%20glowing%20elements%2C%20professional%20tech%20visualization%20with%20subtle%20depth%20and%20dimension&width=1440&height=800&seq=hero-bg-003&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "80px",
        }}
      >
        {/* Gradient Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(30, 64, 175, 0.8))",
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative z-1">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="mb-3">
                <span className="badge bg-info bg-opacity-25 text-info fs-6 px-3 py-2 rounded-pill">
                  🚀 Smart Order & Delivery SaaS
                </span>
              </div>

              <h1 className="display-4 fw-bold mb-3 lh-sm">
                Manage{" "}
                <span className="text-info">All Your Orders & Deliveries</span>{" "}
                from One Dashboard
              </h1>

              <p className="lead text-light opacity-75 mb-4">
                Sync orders from Amazon, Flipkart, Shopify & more. Auto-assign
                deliveries, track shipments, and notify customers — all in
                real-time.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <button className="btn btn-primary btn-lg px-4">
                  <i className="fas fa-rocket me-2"></i> Start Free Trial
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  <i className="fas fa-tv me-2"></i> Book a Demo
                </button>
              </div>

              {/* Feature Tags */}
              <div className="d-flex flex-wrap gap-3">
                <div className="d-flex align-items-center px-3 py-2 bg-white bg-opacity-10 rounded">
                  <i className="fas fa-sync-alt text-warning me-2"></i>
                  <span>Auto Order Sync</span>
                </div>
                <div className="d-flex align-items-center px-3 py-2 bg-white bg-opacity-10 rounded">
                  <i className="fas fa-truck text-info me-2"></i>
                  <span>Delivery Management</span>
                </div>
                <div className="d-flex align-items-center px-3 py-2 bg-white bg-opacity-10 rounded">
                  <i className="fas fa-bell text-success me-2"></i>
                  <span>Real-Time Notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">
              Manage Every Order & Delivery – Seamlessly
            </h2>
            <p
              className="text-muted fs-5 mx-auto"
              style={{ maxWidth: "36rem" }}
            >
              Everything your growing e-commerce business needs to stay on top
              of operations, logistics, and customer experience.
            </p>
          </div>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div
                  className="w-100 mb-4 overflow-hidden rounded"
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/32092271/file/original-51fd44bf3f1d50cf606a7d5b440557bb.jpg?resize=1504x1240&vertical=center"
                    alt="Centralized Order Dashboard"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Centralized Order Dashboard
                </h3>
                <p className="text-muted">
                  Sync and manage orders from Shopify, Amazon, Flipkart & more —
                  all in one intuitive dashboard.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div
                  className="w-100 mb-4 overflow-hidden rounded"
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://www.myrouteonline.com/wp-content/uploads/2023/02/Mapping-Delivery-Routes.png"
                    alt="Smart Delivery Mapping"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Smart Delivery Mapping
                </h3>
                <p className="text-muted">
                  Auto-assign delivery partners (Delhivery, Bluedart, etc.)
                  based on pin codes, weight, and zones.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div
                  className="w-100 mb-4 overflow-hidden rounded"
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://desk.zoho.com/DocsDisplay?zgId=35998097&mode=inline&blockId=2bhlw220a8043687e4608b1a4795b6e460612"
                    alt="Live Notifications"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Live Customer Notifications
                </h3>
                <p className="text-muted">
                  Automatically notify customers via SMS/email from order
                  dispatch to doorstep delivery.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="bg-white p-4 rounded shadow hover-shadow-lg transition-all cursor-pointer hover-translate-up h-100">
                <div
                  className="w-100 mb-4 overflow-hidden rounded"
                  style={{ height: "200px" }}
                >
                  <img
                    src="https://readdy.ai/api/search-image?query=real-time%20reports%20and%20analytics%20dashboard%20with%20bar%20charts%20and%20performance%20metrics%2C%20ecommerce%20kpi%20tracking%20UI%2C%20flat%20design%2C%20blue%20palette&width=300&height=200&seq=feature-reports&orientation=landscape"
                    alt="Advanced Reporting"
                    className="w-100 h-100 object-cover object-top"
                  />
                </div>
                <h3 className="text-dark fs-5 fw-semibold mb-2">
                  Advanced Reports & Analytics
                </h3>
                <p className="text-muted">
                  Track delivery SLAs, returns, and order delays — make smarter
                  decisions with data-driven dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how it work */}
      <section id="how-it-works" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">How It Works</h2>
            <p
              className="text-muted fs-5 mx-auto"
              style={{ maxWidth: "36rem" }}
            >
              Get started in minutes with our simple 3-step automation workflow
              designed for modern e-commerce.
            </p>
          </div>

          <div className="row g-4 text-center">
            {/* Step 1 */}
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 rounded shadow h-100 hover-shadow-lg transition-all hover-translate-up">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  1
                </div>
                <h4 className="text-dark fs-5 fw-semibold mb-2">
                  Connect Your Stores
                </h4>
                <p className="text-muted">
                  Link your Amazon, Flipkart, Shopify, and more with one-click
                  integrations. We support 50+ platforms.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 rounded shadow h-100 hover-shadow-lg transition-all hover-translate-up">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  2
                </div>
                <h4 className="text-dark fs-5 fw-semibold mb-2">
                  Configure Automation
                </h4>
                <p className="text-muted">
                  Set smart rules for courier selection, order routing,
                  notifications, and auto-escalation logic.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 rounded shadow h-100 hover-shadow-lg transition-all hover-translate-up">
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  3
                </div>
                <h4 className="text-dark fs-5 fw-semibold mb-2">
                  Monitor & Optimize
                </h4>
                <p className="text-muted">
                  Track deliveries, SLAs, returns, and analyze performance in
                  real-time with actionable dashboards.
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
        style={{
          background:
            "linear-gradient(to bottom, white, rgba(239, 246, 255, 0.5), white)",
        }}
      >
        {/* Background gradients */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)",
            }}
          ></div>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 50%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container position-relative">
          {/* <div className="text-center mb-5">
            <span
              className="text-primary px-4 py-1 rounded-button small fw-semibold mb-3 d-inline-block shadow-sm"
              style={{
                background: "linear-gradient(to right, #bfdbfe, #bfdbfe)",
                color: "#2563eb",
              }}
            >
              Pricing Plans
            </span>
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: "2.75rem",
                background: "linear-gradient(to right, #2563eb, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p
              className="text-muted fs-5 mx-auto"
              style={{ maxWidth: "36rem" }}
            >
              Start your 14-day free trial. No credit card required. Upgrade
              anytime.
            </p>
          </div> */}

        
        </div>
      </section>

      {/* testimonials section */}
      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">
              What Our Clients Say
            </h2>
            <p
              className="text-muted fs-5 mx-auto"
              style={{ maxWidth: "36rem" }}
            >
              Businesses across the globe trust CentralLogix to streamline their
              order and delivery workflows.
            </p>
          </div>

          <div className="row g-4">
            {/* Testimonial 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <p className="text-muted mb-4">
                  “CentralLogix helped us reduce delivery delays by 35% within
                  the first month. The automation is just brilliant!”
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Client 1"
                    className="rounded-circle me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 text-dark fw-semibold">
                      Priya Malhotra
                    </h6>
                    <small className="text-muted">
                      Operations Manager, DailyMart
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <p className="text-muted mb-4">
                  “We manage orders from Amazon, Flipkart, and our website in
                  one place now. It’s made our team so much more efficient.”
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Client 2"
                    className="rounded-circle me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 text-dark fw-semibold">Rohit Khanna</h6>
                    <small className="text-muted">Founder, TechHut</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <p className="text-muted mb-4">
                  “From automated courier selection to real-time tracking,
                  CentralLogix has changed the way we operate.”
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Client 3"
                    className="rounded-circle me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 text-dark fw-semibold">Neha Desai</h6>
                    <small className="text-muted">
                      Logistics Head, ShopEase
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-dark fs-1 fw-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p
              className="text-muted fs-5 mx-auto"
              style={{ maxWidth: "36rem" }}
            >
              Everything you need to know about using CentralLogix — from setup
              to scaling your business.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10">
              <div className="accordion" id="faqAccordion">
                {/* FAQ 1 */}
                <div className="accordion-item mb-3 border rounded shadow-sm">
                  <h2 className="accordion-header" id="faqHeadingOne">
                    <button
                      className="accordion-button fw-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseOne"
                      aria-expanded="false"
                      aria-controls="faqCollapseOne"
                    >
                      How do I connect my store to CentralLogix?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Simply sign up and use our one-click integration feature
                      to link your Amazon, Shopify, Flipkart, and more.
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item mb-3 border rounded shadow-sm">
                  <h2 className="accordion-header" id="faqHeadingTwo">
                    <button
                      className="accordion-button fw-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseTwo"
                      aria-expanded="false"
                      aria-controls="faqCollapseTwo"
                    >
                      Can I assign couriers automatically based on location?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Yes! Our automation engine allows courier assignment based
                      on pin code, weight, zone, or custom rules.
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item mb-3 border rounded shadow-sm">
                  <h2 className="accordion-header" id="faqHeadingThree">
                    <button
                      className="accordion-button fw-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseThree"
                      aria-expanded="false"
                      aria-controls="faqCollapseThree"
                    >
                      Do I get real-time alerts for order updates?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Absolutely. CentralLogix sends live email and SMS updates
                      for every delivery status change — from dispatch to
                      delivery.
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item mb-3 border rounded shadow-sm">
                  <h2 className="accordion-header" id="faqHeadingFour">
                    <button
                      className="accordion-button fw-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseFour"
                      aria-expanded="false"
                      aria-controls="faqCollapseFour"
                    >
                      Can I generate reports for delivery and performance?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Yes. Use our analytics dashboard to track SLAs, delivery
                      times, return rates, and other KPIs in real time.
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item mb-3 border rounded shadow-sm">
                  <h2 className="accordion-header" id="faqHeadingFive">
                    <button
                      className="accordion-button fw-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseFive"
                      aria-expanded="false"
                      aria-controls="faqCollapseFive"
                    >
                      Is there a free plan available?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="faqHeadingFive"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      Yes! Our Starter Plan is completely free and allows you to
                      process up to 100 orders per month.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
