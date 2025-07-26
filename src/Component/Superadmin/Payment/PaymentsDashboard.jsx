// File: src/components/PaymentsPage.jsx
import React, { useState, useEffect } from 'react';
import SummaryCards from './SummaryCards';
import PaymentTabs from './PaymentTabs';
import PaymentTable from './PaymentTable';
import PaymentSettings from './PaymentSettings';
import PaymentModal from './PaymentModal';

const PaymentsPage = () => {
  const [tab, setTab] = useState('all');
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState('');
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('paymentsData');
    if (data) {
      setPayments(JSON.parse(data));
    } else {
      const initialData = [
        { id: 'TXN-23456', date: 'Jun 27, 2025', customer: 'John Smith', method: 'Credit Card', amount: 1299.99, status: 'Success', note: '' },
        { id: 'TXN-23455', date: 'Jun 27, 2025', customer: 'Emily Johnson', method: 'PayPal', amount: 499.5, status: 'Success', note: '' },
        { id: 'TXN-23454', date: 'Jun 26, 2025', customer: 'Michael Brown', method: 'Credit Card', amount: 899.0, status: 'Failed', note: 'Insufficient funds' },
        { id: 'TXN-23453', date: 'Jun 26, 2025', customer: 'Sarah Williams', method: 'Bank Transfer', amount: 149.99, status: 'Success', note: '' },
        { id: 'TXN-23452', date: 'Jun 25, 2025', customer: 'David Miller', method: 'Credit Card', amount: 2499.0, status: 'Pending', note: '' },
        { id: 'TXN-23451', date: 'Jun 25, 2025', customer: 'Jessica Davis', method: 'Digital Wallet', amount: 349.95, status: 'Success', note: '' },
        { id: 'TXN-23450', date: 'Jun 24, 2025', customer: 'Robert Wilson', method: 'Credit Card', amount: 799.5, status: 'Failed', note: 'Expired card' }
      ];
      localStorage.setItem('paymentsData', JSON.stringify(initialData));
      setPayments(initialData);
    }
  }, []);

  const handleDelete = (id) => {
    const updated = payments.filter(p => p.id !== id);
    setPayments(updated);
    localStorage.setItem('paymentsData', JSON.stringify(updated));
  };

  const filteredPayments = payments.filter(p => {
    const matches = p.id.toLowerCase().includes(search.toLowerCase()) || p.customer.toLowerCase().includes(search.toLowerCase());
    return tab === 'failed' ? p.status === 'Failed' && matches : matches;
  });

  const summary = {
    totalRevenue: payments.reduce((sum, p) => p.status === 'Success' ? sum + p.amount : sum, 0).toFixed(2),
    successRate: ((payments.filter(p => p.status === 'Success').length / payments.length) * 100).toFixed(1),
    failedCount: payments.filter(p => p.status === 'Failed').length
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4 className="fw-bold">Payments</h4>
          <p className="text-muted">Manage all your payment transactions</p>
        </div>
        <button className="btn btn-outline-danger">
          <i className="fas fa-file-pdf me-2"></i> Export
        </button>
      </div>

      <SummaryCards summary={summary} />
      <PaymentTabs tab={tab} setTab={setTab} />

      {tab !== 'settings' && (
        <input
          className="form-control my-3"
          type="text"
          placeholder="Search by transaction ID or customer name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      {tab === 'settings' ? (
        <PaymentSettings />
      ) : (
        <PaymentTable
          payments={filteredPayments}
          onDelete={handleDelete}
          onView={(data) => setModalData(data)}
        />
      )}

      {modalData && (
        <PaymentModal data={modalData} onClose={() => setModalData(null)} />
      )}
    </div>
  );
};

export default PaymentsPage;
