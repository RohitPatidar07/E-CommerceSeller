import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../config";

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    plan: "",
    billing: "",
    date: "",
    phone: "",
  });

  const fetchPlans = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BASE_URL}plan`);
      const transformedData = res.data.data.map((item) => ({
        id: item._id,
        name: item.name,
        priceMonthly: item.priceMonthly,
        priceYearly: item.priceYearly,
        description: item.description,
        status: "Active",
        subscribers: Math.floor(Math.random() * 10000),
      }));
      setPlans(transformedData);
    } catch (err) {
      setError("Failed to load plans. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openModal = (planName) => {
    setFormData((prev) => ({
      ...prev,
      plan: planName,
    }));
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // axios.post(`${BASE_URL}pricing/book`, formData)...
    setShowModal(false);
    alert("Booking Submitted!");
  };

  return (
    <div className="min-vh-100">
      <Navbar />
      <div className="mt-5">
        <section
          id="pricing"
          className="py-5 position-relative overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, white, rgba(239, 246, 255, 0.5), white)",
          }}
        >
          <div className="container position-relative">
            <div className="text-center mb-5">
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
              <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "36rem" }}>
                Start your 14-day free trial. No credit card required. Upgrade anytime.
              </p>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {isLoading ? (
              <div className="text-center">Loading plans...</div>
            ) : (
              <div className="row g-4">
                {plans.map((plan, index) => (
                  <div key={plan.id} className="col-12 col-md-4">
                    <div
                      className="p-4 rounded-button shadow hover-shadow-lg transition-all cursor-pointer border h-100 hover-translate-up"
                      style={{
                        background:
                          index === 1
                            ? "linear-gradient(to bottom right, #2563eb, #3b82f6)"
                            : "linear-gradient(to bottom right, white, rgba(239, 246, 255, 0.3))",
                        borderColor: "rgba(191, 219, 254, 0.3)",
                        color: index === 1 ? "white" : "inherit",
                      }}
                    >
                      {index === 1 && (
                        <div className="position-absolute top-0 start-50 translate-middle">
                          <span
                            className="text-primary px-4 py-1 rounded-button small fw-semibold shadow"
                            style={{ background: "#bfdbfe", marginTop: "-1rem" }}
                          >
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center position-relative">
                        <h3 className={`fs-3 fw-bold mb-3 ${index === 1 ? "text-white" : "text-dark"}`}>
                          {plan.name}
                        </h3>
                        <div className="mb-4">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className={`small me-2 ${index === 1 ? "text-white-50" : "text-muted"}`}>
                              INR
                            </span>
                            <span className={`fs-1 fw-bold ${index === 1 ? "text-white" : "text-primary"}`}>
                              {plan.priceMonthly}
                            </span>
                          </div>
                          <span className={`small ${index === 1 ? "text-white-50" : "text-muted"}`}>month</span>
                        </div>
                        <p className="text-black small mb-4">{plan.description}</p>
                        <div className="mb-4">
                          <div className="d-flex align-items-center justify-content-center">
                            <span className={`fs-1 fw-bold ${index === 1 ? "text-white" : "text-primary"}`}>
                              {plan.priceYearly}
                            </span>
                          </div>
                          <span className={`small ${index === 1 ? "text-white-50" : "text-muted"}`}>Yearly</span>
                        </div>

                        <button
                          className={`btn w-100 d-flex justify-content-center align-items-center gap-2 ${
                            index === 1 ? "btn-light text-primary" : "btn-primary"
                          }`}
                          onClick={() => openModal(plan.name)}
                        >
                          <span>{index === 2 ? "Contact Sales" : "Choose Plan"}</span>
                          <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Pricing Booking Form</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" name="company" value={formData.company} onChange={handleChange} required placeholder="Enter company name" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter email address" />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Plan</label>
                    <input type="text" className="form-control" name="plan" value={formData.plan} readOnly />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Billing</label>
                    <select className="form-select" name="billing" value={formData.billing} onChange={handleChange} required>
                      <option value="">Select billing cycle</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter phone number" />
                  </div>

                  <button type="submit" className="btn btn-primary">Submit Booking</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Pricing;
