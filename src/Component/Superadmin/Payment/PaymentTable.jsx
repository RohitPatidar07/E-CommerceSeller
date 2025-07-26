// Payments.jsx
import React, { useState, useEffect } from 'react';

// PaymentTable Component
const PaymentTable = ({ payments, onView, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>TRANSACTION ID</th>
            <th>DATE</th>
            <th>CUSTOMER</th>
            <th>PAYMENT METHOD</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.date}</td>
              <td>{payment.customer}</td>
              <td>{payment.method}</td>
              <td>${payment.amount.toLocaleString()}</td>
              <td>
                <span className={`badge bg-${payment.status === 'Completed' ? 'success' : 'warning'}`}>
                  {payment.status}
                </span>
              </td>
              <td>
                <button 
                  className="btn btn-sm btn-outline-primary me-2" 
                  onClick={() => onView(payment)}
                >
                  💬️
                </button>
                <button 
                  className="btn btn-sm btn-outline-danger" 
                  onClick={() => onDelete(payment.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PaymentModal Component
const PaymentModal = ({ payment, show, onClose }) => {
  if (!payment) return null;

  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Payment Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p><strong>Transaction ID:</strong> {payment.id}</p>
            <p><strong>Date:</strong> {payment.date}</p>
            <p><strong>Customer:</strong> {payment.customer}</p>
            <p><strong>Payment Method:</strong> {payment.method}</p>
            <p><strong>Amount:</strong> ${payment.amount.toLocaleString()}</p>
            <p><strong>Status:</strong> {payment.status}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Payments Component
const Payments = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [totalRevenue, setTotalRevenue] = useState(12345.67);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedPayments = localStorage.getItem('payments');
    if (savedPayments) {
      setPayments(JSON.parse(savedPayments));
    } else {
      // Initial data
      const initialPayments = [
        { id: 'TxN-23458', date: 'Jun 27, 2025', customer: 'Jabha Smith', method: 'Credit Card', amount: 1299.99, status: 'Disputed' },
        { id: 'TxN-23455', date: 'Jun 27, 2025', customer: 'Emily Johnson', method: 'PayPal', amount: 499.50, status: 'Disputed' },
        { id: 'TxN-23454', date: 'Jun 26, 2025', customer: 'Michael Brown', method: 'Credit Card', amount: 899.00, status: 'Disputed' },
        { id: 'TxN-23453', date: 'Jun 26, 2025', customer: 'Sarah Williams', method: 'Bank Transfer', amount: 149.99, status: 'Disputed' },
        { id: 'TxN-23452', date: 'Jun 25, 2025', customer: 'David Miller', method: 'Credit Card', amount: 2499.00, status: 'Disputed' },
        { id: 'TxN-23451', date: 'Jun 25, 2025', customer: 'Jessica Davis', method: 'Digital Wallet', amount: 348.95, status: 'Disputed' },
        { id: 'TxN-23450', date: 'Jun 24, 2025', customer: 'Robert Wilson', method: 'Credit Card', amount: 799.50, status: 'Disputed' }
      ];
      setPayments(initialPayments);
      localStorage.setItem('payments', JSON.stringify(initialPayments));
    }
  }, []);

  // Save to localStorage whenever payments change
  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
    // Update total revenue
    const newTotal = payments.reduce((sum, payment) => sum + payment.amount, 0);
    setTotalRevenue(newTotal);
  }, [payments]);

  const handleView = (payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this payment?')) {
      const updatedPayments = payments.filter(payment => payment.id !== id);
      setPayments(updatedPayments);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPayment(null);
  };

  const filteredPayments = payments.filter(payment => {
    if (activeTab === 'all') return true;
    return payment.status.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="container mt-4">
      <h1>Payments</h1>
      <p className="text-muted">Manage all your payment transactions</p>

      <div className="card mb-4">
        <div className="card-body">
          <h2>Total Revenue</h2>
          <h3>${totalRevenue.toFixed(2)}</h3>
          <p className="text-success">↑ 2.5% from last month</p>
        </div>
      </div>

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Payments
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'disputed' ? 'active' : ''}`}
            onClick={() => setActiveTab('disputed')}
          >
            Disputed
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Payment Settings
          </button>
        </li>
      </ul>

      {activeTab === 'settings' ? (
        <div className="card">
          <div className="card-body">
            <h3>Payment Settings</h3>
            <p>Configure your payment gateway settings here.</p>
            {/* Add your settings form here */}
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>{activeTab === 'all' ? 'All Payments' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Payments`}</h3>
            <p>Showing 1 to {filteredPayments.length} of {filteredPayments.length} results</p>
          </div>

          <PaymentTable 
            payments={filteredPayments} 
            onView={handleView} 
            onDelete={handleDelete} 
          />
        </>
      )}

      <PaymentModal 
        payment={selectedPayment} 
        show={showModal} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default PaymentTable;