import React, { useState } from 'react';
import { Modal, Button, Form, Table, Badge } from 'react-bootstrap';
import { FaTimes, FaEye, FaShippingFast, FaPrint, FaDownload } from 'react-icons/fa';

const OrderDetailsModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
      <div className="bg-white rounded shadow-sm w-100 mx-3" style={{ maxWidth: '700px' }}>
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <h5 className="mb-0 fw-bold">Order Details</h5>
          <Button variant="link" onClick={onClose} className="text-muted">
            <FaTimes />
          </Button>
        </div>
        <div className="p-3">
          <div className="row g-3">
            <div className="col-6">
              <small className="text-muted">Order ID</small>
              <p className="mb-0 fw-semibold">{order.id}</p>
            </div>
            <div className="col-6">
              <small className="text-muted">Channel</small>
              <p className="mb-0 fw-semibold">{order.channel}</p>
            </div>
            <div className="col-6">
              <small className="text-muted">Customer</small>
              <p className="mb-0 fw-semibold">{order.customer}</p>
            </div>
            <div className="col-6">
              <small className="text-muted">Status</small>
              <p className="mb-0 fw-semibold">{order.status}</p>
            </div>
            <div className="col-6">
              <small className="text-muted">Total</small>
              <p className="mb-0 fw-semibold">{order.total}</p>
            </div>
            <div className="col-6">
              <small className="text-muted">Date</small>
              <p className="mb-0 fw-semibold">{order.date}</p>
            </div>
          </div>
        </div>
        <div className="border-top p-3 d-flex justify-content-end">
          <Button variant="light" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

const getStatusVariant = (status) => {
  switch (status) {
    case 'Processing': return 'primary';
    case 'Shipped': return 'warning';
    case 'Delivered': return 'success';
    case 'Pending': return 'info';
    case 'Cancelled': return 'danger';
    default: return 'secondary';
  }
};

const OrderDetails = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filters, setFilters] = useState({
    store: '',
    dateRange: '',
    status: '',
    orderId: ''
  });

  const orders = [
    { id: '#ORD-2024-001', channel: 'Online Store', customer: 'John Smith', status: 'Processing', total: '$124.99', date: '2 hours ago' },
    { id: '#ORD-2024-002', channel: 'Mobile App', customer: 'Sarah Johnson', status: 'Shipped', total: '$89.50', date: '4 hours ago' },
    { id: '#ORD-2024-003', channel: 'Online Store', customer: 'Mike Davis', status: 'Delivered', total: '$256.75', date: '6 hours ago' },
    { id: '#ORD-2024-004', channel: 'Marketplace', customer: 'Emma Wilson', status: 'Pending', total: '$45.20', date: '8 hours ago' },
    { id: '#ORD-2024-005', channel: 'Online Store', customer: 'David Brown', status: 'Cancelled', total: '$178.90', date: '10 hours ago' },
    { id: '#ORD-2024-006', channel: 'Mobile App', customer: 'Lisa Anderson', status: 'Processing', total: '$92.30', date: '12 hours ago' },
    { id: '#ORD-2024-007', channel: 'Online Store', customer: 'Tom Garcia', status: 'Shipped', total: '$315.60', date: '14 hours ago' },
    { id: '#ORD-2024-008', channel: 'Marketplace', customer: 'Amy Martinez', status: 'Delivered', total: '$67.85', date: '16 hours ago' }
  ];

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ store: '', dateRange: '', status: '', orderId: '' });
  };

  return (
    <div className="">
      <div className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-2">Orders Management</h2>
        <p className="text-muted">Manage and track all your orders in one place.</p>
      </div>

      {/* Filters Section */}
      <div className="bg-white rounded shadow-sm border p-4 mb-4">
        <div className="row g-3">
          <div className="col-md-3">
            <Form.Group controlId="storeSelect">
              <Form.Label>Store</Form.Label>
              <Form.Select value={filters.store} onChange={(e) => handleFilterChange('store', e.target.value)}>
                <option value="">All Stores</option>
                <option value="online">Online Store</option>
                <option value="mobile">Mobile App</option>
                <option value="marketplace">Marketplace</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group controlId="dateRange">
              <Form.Label>Date Range</Form.Label>
              <Form.Control type="date" value={filters.dateRange} onChange={(e) => handleFilterChange('dateRange', e.target.value)} />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group controlId="statusSelect">
              <Form.Label>Status</Form.Label>
              <Form.Select value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)}>
                <option value="">All Status</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group controlId="orderId">
              <Form.Label>Order ID</Form.Label>
              <Form.Control type="text" placeholder="Search Order ID" value={filters.orderId} onChange={(e) => handleFilterChange('orderId', e.target.value)} />
            </Form.Group>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button variant="secondary" onClick={resetFilters}>Reset</Button>
          <Button variant="primary">Apply Filters</Button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded shadow-sm border">
        <div className="d-flex justify-content-between align-items-center border-bottom px-4 py-3">
          <h5 className="mb-0">All Orders</h5>
          <Button variant="light">
            <FaDownload className="me-2" /> Export CSV
          </Button>
        </div>
        <div className="table-responsive">
          <Table hover className="mb-0">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Channel</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.channel}</td>
                  <td>{order.customer}</td>
                  <td><Badge bg={getStatusVariant(order.status)}>{order.status}</Badge></td>
                  <td>{order.total}</td>
                  <td className="d-flex gap-2">
                    <Button size="sm" variant="link" className="text-primary fw-bold" onClick={() => setSelectedOrder(order)}>
                      <FaEye className="me-1" /> View
                    </Button>
                    {order.status === 'Processing' && (
                      <Button size="sm" variant="link" className="text-success fw-bold">
                        <FaShippingFast className="me-1" /> Ship
                      </Button>
                    )}
                    <Button size="sm" variant="link" className="text-secondary fw-bold">
                      <FaPrint className="me-1" /> Label
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="d-flex justify-content-between align-items-center px-4 py-3 border-top">
          <span className="text-muted">Showing 1 to 8 of 247 results</span>
          <div className="btn-group">
            <Button variant="outline-secondary">Previous</Button>
            <Button variant="primary">1</Button>
            <Button variant="outline-secondary">2</Button>
            <Button variant="outline-secondary">3</Button>
            <Button variant="outline-secondary">Next</Button>
          </div>
        </div>
      </div>

      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
    </div>
  );
};

export default OrderDetails;
