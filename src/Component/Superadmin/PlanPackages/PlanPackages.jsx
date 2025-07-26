import React, { useState, useEffect } from "react";

const PlansPackages = () => {
  // State for plans data
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({
    planName: "",
    price: "",
    billingCycle: "Monthly",
    status: "Active",
    description: "",
    subscribers: 0
  });
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const plansPerPage = 5;

  // Sample data initialization
  useEffect(() => {
    const savedPlans = localStorage.getItem('plansData');
    if (savedPlans) {
      setPlans(JSON.parse(savedPlans));
    } else {
      const initialData = [
        {
          id: 1,
          planName: "Bronze",
          price: 9.99,
          billingCycle: "Monthly",
          status: "Active",
          description: "Basic access Community support limited features",
          subscribers: 243
        },
        {
          id: 2,
          planName: "Silver",
          price: 14.99,
          billingCycle: "Monthly",
          status: "Active",
          description: "Priority email support Extended features Access to updates",
          subscribers: 857
        },
        {
          id: 3,
          planName: "Gold",
          price: 24.99,
          billingCycle: "Monthly",
          status: "Active",
          description: "All Silver features Advanced analytics Custom branding",
          subscribers: 512
        },
        {
          id: 4,
          planName: "Platinum",
          price: 49.99,
          billingCycle: "Monthly",
          status: "Active",
          description: "All Gold features Dedicated account manager 24/7 support",
          subscribers: 326
        }
      ];
      setPlans(initialData);
      localStorage.setItem('plansData', JSON.stringify(initialData));
    }
  }, []);

  // Save to localStorage when plans change
  useEffect(() => {
    localStorage.setItem('plansData', JSON.stringify(plans));
  }, [plans]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing plan
      setPlans(plans.map(plan => 
        plan.id === formData.id ? formData : plan
      ));
    } else {
      // Add new plan
      const newPlan = {
        ...formData,
        id: plans.length > 0 ? Math.max(...plans.map(p => p.id)) + 1 : 1,
        subscribers: parseInt(formData.subscribers) || 0
      };
      setPlans([...plans, newPlan]);
    }
    
    // Reset form and close modal
    setFormData({
      planName: "",
      price: "",
      billingCycle: "Monthly",
      status: "Active",
      description: "",
      subscribers: 0
    });
    setShowModal(false);
    setIsEditing(false);
  };

  // Edit plan
  const handleEdit = (plan) => {
    setFormData(plan);
    setIsEditing(true);
    setShowModal(true);
  };

  // Delete plan
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      setPlans(plans.filter(plan => plan.id !== id));
    }
  };

  // Toggle plan status
  const toggleStatus = (id) => {
    setPlans(plans.map(plan => {
      if (plan.id === id) {
        return {
          ...plan,
          status: plan.status === "Active" ? "Inactive" : "Active"
        };
      }
      return plan;
    }));
  };

  // Pagination logic
  const indexOfLastPlan = currentPage * plansPerPage;
  const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
  const currentPlans = plans.slice(indexOfFirstPlan, indexOfLastPlan);
  const totalPages = Math.ceil(plans.length / plansPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1>Plans & Pricing</h1>
          <p className="text-muted mb-0">
            Manage your subscription plans, pricing options.
          </p>
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-plus me-2"></i>
          Add New Plan
        </button>
      </div>

      {/* Plans table */}
      <div className="card shadow-sm">
        <div className="card-header">
          <h5 className="mb-0">View All Plans</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>PLAN NAME</th>
                <th>PRICE</th>
                <th>BILLING CYCLE</th>
                <th>STATUS</th>
                <th>DESCRIPTION</th>
                <th>SUBSCRIBERS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {currentPlans.length > 0 ? (
                currentPlans.map((plan) => (
                  <tr key={plan.id}>
                    <td><strong>{plan.planName}</strong></td>
                    <td>${plan.price.toFixed(2)}</td>
                    <td>{plan.billingCycle}</td>
                    <td>
                      <span 
                        className={`badge ${plan.status === "Active" ? "bg-success" : "bg-secondary"}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => toggleStatus(plan.id)}
                      >
                        {plan.status}
                      </span>
                    </td>
                    <td>{plan.description}</td>
                    <td>{plan.subscribers}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button 
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleEdit(plan)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(plan.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No plans found. Create a new plan to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div>
            Showing {indexOfFirstPlan + 1} to {Math.min(indexOfLastPlan, plans.length)} of {plans.length} results
          </div>
          <nav>
            <ul className="pagination mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <li 
                  key={i} 
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                  <button 
                    className="page-link" 
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => paginate(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Plan Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? 'Edit Plan' : 'Add New Plan'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => {
                    setShowModal(false);
                    setIsEditing(false);
                    setFormData({
                      planName: "",
                      price: "",
                      billingCycle: "Monthly",
                      status: "Active",
                      description: "",
                      subscribers: 0
                    });
                  }}
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Plan Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="planName"
                        value={formData.planName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Price ($)</label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Billing Cycle</label>
                      <select
                        className="form-select"
                        name="billingCycle"
                        value={formData.billingCycle}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="3"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subscribers</label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      name="subscribers"
                      value={formData.subscribers}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                      setIsEditing(false);
                      setFormData({
                        planName: "",
                        price: "",
                        billingCycle: "Monthly",
                        status: "Active",
                        description: "",
                        subscribers: 0
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {isEditing ? 'Update Plan' : 'Add Plan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansPackages