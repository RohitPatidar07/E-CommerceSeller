import Footer from "./Footer";
import Navbar from "./Navbar";


const Pricing = () => {
  return (
    <div className="min-vh-100 bg-white pt-5">
    <Navbar/>
    <div className="container">
     {/* Pricing Section */}
     <section 
  id="pricing" 
  className="py-5 position-relative overflow-hidden"
  style={{ background: "linear-gradient(to bottom, white, rgba(239, 246, 255, 0.5), white)" }}
>
  {/* Background gradients */}
  <div className="position-absolute top-0 start-0 w-100 h-100">
    <div 
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ background: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 50%)" }}
    ></div>
    <div 
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ background: "radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 50%)" }}
    ></div>
  </div>

  {/* Content */}
  <div className="container position-relative">
    <div className="text-center mb-5">
      <span 
        className="text-primary px-4 py-1 rounded-button small fw-semibold mb-3 d-inline-block shadow-sm"
        style={{ background: "linear-gradient(to right, #bfdbfe, #bfdbfe)", color: "#2563eb" }}
      >
        Pricing Plans
      </span>
      <h2 
        className="fw-bold mb-4"
        style={{
          fontSize: "2.75rem",
          background: "linear-gradient(to right, #2563eb, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        Simple, Transparent Pricing
      </h2>
      <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
        Start your 14-day free trial. No credit card required. Upgrade anytime.
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
            <h3 className="text-dark fs-3 fw-bold mb-3">Starter</h3>
            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <span className="text-muted small me-2">INR</span>
                <span className="text-primary fs-1 fw-bold">999</span>
              </div>
              <span className="text-muted small">/month</span>
            </div>
            <ul className="text-start mb-4 list-unstyled">
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Up to 500 orders/month</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>1 User Access</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Email Support</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Core Features Only</li>
            </ul>
            <button className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2">
              <span>Start Free Trial</span><i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Growth Plan - Most Popular */}
      <div className="col-12 col-md-4">
        <div 
          className="p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer position-relative scale-105 hover-translate-up h-100"
          style={{ background: "linear-gradient(to bottom right, #2563eb, #3b82f6)" }}
        >
          <div className="position-absolute top-0 start-50 translate-middle">
            <span 
              className="text-primary px-4 py-1 rounded-button small fw-semibold shadow"
              style={{ background: "#bfdbfe", marginTop: "-1rem" }}
            >
              Most Popular
            </span>
          </div>
          <div className="text-center position-relative text-white">
            <h3 className="fs-3 fw-bold mb-3">Growth</h3>
            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-center">
                <span className="text-white-50 small me-2">INR</span>
                <span className="fs-1 fw-bold">2,499</span>
              </div>
              <span className="text-white-50 small">/month</span>
            </div>
            <ul className="text-start mb-4 list-unstyled">
              <li className="mb-3"><i className="fas fa-check text-white me-2"></i>Up to 5,000 orders/month</li>
              <li className="mb-3"><i className="fas fa-check text-white me-2"></i>5 User Access</li>
              <li className="mb-3"><i className="fas fa-check text-white me-2"></i>All Core + Reports</li>
              <li className="mb-3"><i className="fas fa-check text-white me-2"></i>Multi-channel Integrations</li>
              <li className="mb-3"><i className="fas fa-check text-white me-2"></i>Email & Chat Support</li>
            </ul>
            <button className="btn btn-light w-100 d-flex justify-content-center align-items-center gap-2 text-primary">
              <span>Choose Plan</span><i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Pro Plan */}
      <div className="col-12 col-md-4">
        <div 
          className="p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer border h-100 hover-translate-up"
          style={{ 
            background: "linear-gradient(to bottom right, white, rgba(239, 246, 255, 0.3))",
            borderColor: "rgba(191, 219, 254, 0.3)" 
          }}
        >
          <div className="text-center position-relative">
            <h3 className="text-dark fs-3 fw-bold mb-3">Pro / Enterprise</h3>
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
              <span className="text-muted small">Tailored for Scale</span>
            </div>
            <ul className="text-start mb-4 list-unstyled">
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Unlimited orders & users</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Custom Integrations</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>Dedicated Account Manager</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>White-label Branding</li>
              <li className="mb-3"><i className="fas fa-check text-success me-2"></i>24/7 Phone Support</li>
            </ul>
            <button className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2">
              <span>Contact Sales</span><i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    <Footer/>
  </div>
  );
};

export default Pricing;