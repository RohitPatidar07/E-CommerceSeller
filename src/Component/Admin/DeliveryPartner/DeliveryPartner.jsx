import React, { useState } from 'react';
import { Table, Form, Button, Modal, Toast, ToastContainer } from 'react-bootstrap';

const DeliveryPartner = () => {
  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: '#123456',
      customer: 'Rohan',
      platform: 'Shopify',
      amount: '₹999',
      status: 'Pending',
      deliveryPartner: '',
      trackingId: '',
      address: '123 Main St, Bangalore, KA 560001',
      product: 'Wireless Headphones'
    },
    {
      id: '#123457',
      customer: 'Anika',
      platform: 'Flipkart',
      amount: '₹499',
      status: 'Shipped',
      deliveryPartner: 'Delhivery',
      trackingId: 'DEL123456789',
      address: '456 Park Ave, Mumbai, MH 400001',
      product: 'Smart Watch'
    },
    {
      id: '#123458',
      customer: 'Vikram',
      platform: 'Amazon',
      amount: '₹1,299',
      status: 'Pending',
      deliveryPartner: '',
      trackingId: '',
      address: '789 Oak Lane, Delhi, DL 110001',
      product: 'Bluetooth Speaker'
    }
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [deliveryPartner, setDeliveryPartner] = useState('');
  const [trackingId, setTrackingId] = useState('');
  const [enableWebhook, setEnableWebhook] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('https://yourdomain.com/webhook');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const deliveryPartners = [
    'Delhivery',
    'Bluedart',
    'Ecom Express',
    'Shadowfax',
    'Custom Courier'
  ];

  const toggleOrderSelection = (orderId) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  const viewOrderDetails = (order) => {
    setCurrentOrder(order);
    setShowDetails(true);
  };

  const handleAssignPartner = () => {
    if (!deliveryPartner) {
      alert('Please select a delivery partner');
      return;
    }

    // Update orders with delivery partner and tracking ID
    const updatedOrders = orders.map(order => {
      if (selectedOrders.includes(order.id)) {
        return {
          ...order,
          deliveryPartner,
          trackingId: trackingId || `AUTO-${order.id.slice(1)}-${Date.now()}`,
          status: 'Ready to Ship'
        };
      }
      return order;
    });

    setOrders(updatedOrders);
    setSelectedOrders([]);
    setDeliveryPartner('');
    setTrackingId('');
    setShowSuccess(true);
    setShowModal(false);
  };

  const autoGenerateTrackingId = () => {
    setTrackingId(`AUTO-${currentOrder?.id.slice(1)}-${Date.now()}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Assign Delivery Partner</h2>

      {/* Step 1: Select Orders */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Assign Partner Table</h5>
        </div>
        <div className="card-body">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th></th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Platform</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Delivery Partner</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className={`${selectedOrders.includes(order.id) ? 'table-primary' : ''}`}
                >
                  <td>
                    <Form.Check
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => toggleOrderSelection(order.id)}
                    />
                  </td>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.platform}</td>
                  <td>{order.amount}</td>
                  <td>
                    <span className={`badge ${order.status === 'Pending' ? 'bg-warning' : 'bg-success'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.deliveryPartner || '-'}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => viewOrderDetails(order)}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      {/* Step 2-5: Delivery Partner Assignment Form */}
      {selectedOrders.length > 0 && (
        <div className="card mb-4">
          <div className="card-header">
            <h5>Assign Delivery Partner</h5>
          </div>
          <div className="card-body">
            <Form>
              {/* Step 2: Choose Delivery Partner */}
              <Form.Group className="mb-3">
                <Form.Label>Delivery Partner</Form.Label>
                <Form.Select
                  value={deliveryPartner}
                  onChange={(e) => setDeliveryPartner(e.target.value)}
                >
                  <option value="">Select a delivery partner</option>
                  {deliveryPartners.map(partner => (
                    <option key={partner} value={partner}>{partner}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Step 3: Tracking ID */}
              <Form.Group className="mb-3">
                <Form.Label>Tracking ID</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    placeholder="Enter tracking ID"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={autoGenerateTrackingId}
                    disabled={!deliveryPartner}
                  >
                    Auto-generate
                  </Button>
                </div>
              </Form.Group>

              {/* Step 4: Webhook Configuration */}
              <Form.Group className="mb-3">
                <Form.Check
                  type="switch"
                  id="enable-webhook"
                  label="Enable Auto Status Updates"
                  checked={enableWebhook}
                  onChange={(e) => setEnableWebhook(e.target.checked)}
                />
                {enableWebhook && (
                  <div className="mt-2 p-3 bg-light rounded">
                    <Form.Group className="mb-2">
                      <Form.Label>Webhook URL</Form.Label>
                      <Form.Control
                        type="url"
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Events to Listen</Form.Label>
                      <Form.Check
                        type="checkbox"
                        label="In-Transit"
                        defaultChecked
                      />
                      <Form.Check
                        type="checkbox"
                        label="Out for Delivery"
                        defaultChecked
                      />
                      <Form.Check
                        type="checkbox"
                        label="Delivered"
                        defaultChecked
                      />
                      <Form.Check
                        type="checkbox"
                        label="Cancelled"
                        defaultChecked
                      />
                    </Form.Group>
                    <Button variant="outline-primary" size="sm" className="mt-2">
                      Test Webhook
                    </Button>
                  </div>
                )}
              </Form.Group>

              {/* Step 5: Assign Button */}
              <Button
                variant="primary"
                onClick={() => setShowModal(true)}
                disabled={!deliveryPartner}
              >
                Assign Partner
              </Button>
            </Form>
          </div>
        </div>
      )}

      {/* Order Details Modal */}
      <Modal show={showDetails} onHide={() => setShowDetails(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details - {currentOrder?.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentOrder && (
            <div>
              <p><strong>Customer:</strong> {currentOrder.customer}</p>
              <p><strong>Address:</strong> {currentOrder.address}</p>
              <p><strong>Product:</strong> {currentOrder.product}</p>
              <p><strong>Platform:</strong> {currentOrder.platform}</p>
              <p><strong>Amount:</strong> {currentOrder.amount}</p>
              <p><strong>Status:</strong> {currentOrder.status}</p>
              {currentOrder.deliveryPartner && (
                <p><strong>Delivery Partner:</strong> {currentOrder.deliveryPartner}</p>
              )}
              {currentOrder.trackingId && (
                <p><strong>Tracking ID:</strong> {currentOrder.trackingId}</p>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetails(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to assign <strong>{deliveryPartner}</strong> to {selectedOrders.length} order(s).</p>
          <p>Tracking ID: {trackingId || 'Will be auto-generated'}</p>
          <p>Are you sure you want to proceed?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAssignPartner}>
            Confirm Assignment
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Toast */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showSuccess}
          onClose={() => setShowSuccess(false)}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Delivery partner assigned successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default DeliveryPartner;