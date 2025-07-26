// Converted version of the Tailwind-based code using React + Bootstrap + React Icons + Recharts-compatible layout

import React, { useState } from 'react';
import { FaDownload, FaCheck, FaTimes, FaPrint } from 'react-icons/fa';

const PlansBilling = () => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const billingHistory = [
    {
      id: 'INV-2024-001',
      date: '2024-01-15',
      plan: 'Professional Plan',
      amount: '$99.00',
      status: 'Paid',
      statusClass: 'badge bg-success'
    },
    {
      id: 'INV-2024-002',
      date: '2023-12-15',
      plan: 'Professional Plan',
      amount: '$99.00',
      status: 'Paid',
      statusClass: 'badge bg-success'
    },
    {
      id: 'INV-2024-003',
      date: '2023-11-15',
      plan: 'Basic Plan',
      amount: '$49.00',
      status: 'Paid',
      statusClass: 'badge bg-success'
    },
    {
      id: 'INV-2024-004',
      date: '2023-10-15',
      plan: 'Basic Plan',
      amount: '$49.00',
      status: 'Failed',
      statusClass: 'badge bg-danger'
    },
    {
      id: 'INV-2024-005',
      date: '2023-09-15',
      plan: 'Basic Plan',
      amount: '$49.00',
      status: 'Pending',
      statusClass: 'badge bg-warning text-dark'
    }
  ];

  const plans = [
    {
      name: 'Basic Plan',
      price: '$49',
      period: '/month',
      orders: '500 orders/month',
      features: ['Basic analytics', 'Email support', 'Standard shipping']
    },
    {
      name: 'Professional Plan',
      price: '$99',
      period: '/month',
      orders: '2,000 orders/month',
      features: ['Advanced analytics', 'Priority support', 'Express shipping', 'Custom branding'],
      current: true
    },
    {
      name: 'Enterprise Plan',
      price: '$199',
      period: '/month',
      orders: 'Unlimited orders',
      features: ['Full analytics suite', '24/7 phone support', 'White-label solution', 'API access']
    }
  ];

  const handleDownloadInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setShowInvoiceModal(true);
  };

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h1 className="h3 fw-bold">Billing & Plans</h1>
        <p className="text-muted">Manage your subscription and billing information</p>
      </div>

      <div className="card mb-4">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-fill">
            <h5 className="card-title">Current Plan</h5>
            <div className="row">
              <div className="col-md-4 mb-3">
                <small className="text-muted">Plan Name</small>
                <div>Professional Plan</div>
              </div>
              <div className="col-md-4 mb-3">
                <small className="text-muted">Monthly Price</small>
                <div>$99.00</div>
              </div>
              <div className="col-md-4 mb-3">
                <small className="text-muted">Orders Limit</small>
                <div>2,000 orders/month</div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: '62%' }}
                    role="progressbar"
                    aria-valuenow="62"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    62%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-primary mt-3 mt-md-0" onClick={() => setShowUpgradeModal(true)}>
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header">
          <h5 className="mb-0">Billing History</h5>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.plan}</td>
                  <td>{item.amount}</td>
                  <td><span className={item.statusClass}>{item.status}</span></td>
                  <td>
                    <button className="btn btn-link p-0" onClick={() => handleDownloadInvoice(item)}>
                      <FaDownload className="text-primary" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Choose Your Plan</h5>
                <button type="button" className="btn-close" onClick={() => setShowUpgradeModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  {plans.map((plan) => (
                    <div key={plan.name} className="col-md-4 mb-4">
                      <div className={`card h-100 ${plan.current ? 'border-primary bg-light' : ''}`}>
                        {plan.current && (
                          <div className="text-center text-white bg-primary py-1 rounded-top">
                            Current Plan
                          </div>
                        )}
                        <div className="card-body text-center">
                          <h5>{plan.name}</h5>
                          <div className="h4">{plan.price} <small className="text-muted">{plan.period}</small></div>
                          <p className="text-muted small mb-2">{plan.orders}</p>
                          <ul className="list-unstyled">
                            {plan.features.map((f, idx) => (
                              <li key={idx} className="text-muted">
                                <FaCheck className="text-success me-2" />{f}
                              </li>
                            ))}
                          </ul>
                          <button
                            className={`btn w-100 mt-3 ${plan.current ? 'btn-secondary disabled' : 'btn-primary'}`}
                          >
                            {plan.current ? 'Current Plan' : 'Upgrade'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Modal */}
      {showInvoiceModal && selectedInvoice && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Invoice Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowInvoiceModal(false)}></button>
              </div>
              <div className="modal-body">
                <h6>Invoice #{selectedInvoice.id}</h6>
                <p className="text-muted">Date: {selectedInvoice.date}</p>
                <p><strong>Plan:</strong> {selectedInvoice.plan}</p>
                <p><strong>Amount:</strong> {selectedInvoice.amount}</p>
                <p><strong>Payment Method:</strong> Credit Card ****1234</p>
                <span className={selectedInvoice.statusClass}>{selectedInvoice.status}</span>
                <hr />
                <div className="d-flex gap-2">
                  <button className="btn btn-primary w-50">
                    <FaDownload className="me-2" /> Download PDF
                  </button>
                  <button className="btn btn-outline-secondary w-50">
                    <FaPrint className="me-2" /> Print Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansBilling;
