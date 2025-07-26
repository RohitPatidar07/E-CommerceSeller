import React, { useState } from 'react';
import { Table, Button, Form, Modal, Row, Col } from 'react-bootstrap';

const PlansPackages = () => {
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: 'Bronze',
      price: 9.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['Basic access', 'Community support', 'Limited features'],
      subscribers: 1243
    },
    {
      id: 2,
      name: 'Silver',
      price: 14.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['Priority email support', 'Extended features', 'Access to updates'],
      subscribers: 857
    },
    {
      id: 3,
      name: 'Gold',
      price: 24.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['All Silver features', 'Advanced analytics', 'Custom branding'],
      subscribers: 512
    },
    {
      id: 4,
      name: 'Platinum',
      price: 48.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['All Gold features', 'Dedicated account manager', '24/7 support'],
      subscribers: 326
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newPlan, setNewPlan] = useState({
    name: '',
    price: '',
    billingCycle: 'Monthly',
    status: 'Active',
    descriptions: ['', '']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlan({ ...newPlan, [name]: value });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...newPlan.descriptions];
    updatedDescriptions[index] = value;
    setNewPlan({ ...newPlan, descriptions: updatedDescriptions });
  };

  const addDescriptionField = () => {
    setNewPlan({ ...newPlan, descriptions: [...newPlan.descriptions, ''] });
  };

  const removeDescriptionField = (index) => {
    const updatedDescriptions = [...newPlan.descriptions];
    updatedDescriptions.splice(index, 1);
    setNewPlan({ ...newPlan, descriptions: updatedDescriptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlanWithId = {
      ...newPlan,
      id: plans.length + 1,
      subscribers: 0,
      price: parseFloat(newPlan.price)
    };
    setPlans([...plans, newPlanWithId]);
    setShowModal(false);
    setNewPlan({
      name: '',
      price: '',
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['', '']
    });
  };

  const deletePlan = (id) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <div className="">
      <h1>Plans Packages</h1>
      <p>Manage your subscription plans, pricing options.</p>

      <div className="d-flex justify-content-between mb-3">
        <h4>View All Plans</h4>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add New Plan
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>PLAN NAME</th>
            <th>PRICE</th>
            <th>BILLING CYCLE</th>
            <th>STATUS</th>
            <th>DESCRIPTIONS</th>
            <th>SUBSCRIBERS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.name}</td>
              <td>${plan.price.toFixed(2)}</td>
              <td>{plan.billingCycle}</td>
              <td>{plan.status}</td>
              <td>
                <ul className="list-unstyled">
                  {plan.descriptions.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </td>
              <td>{plan.subscribers.toLocaleString()}</td>
              <td>
                <Button variant="outline-primary" size="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => deletePlan(plan.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-end">
        <p>Showing 1 to {plans.length} of {plans.length} results</p>
      </div>

      {/* Add New Plan Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Plan</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Plan Name</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="name"
                  value={newPlan.name}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Price</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  name="price"
                  value={newPlan.price}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Billing Cycle</Form.Label>
              <Col sm={10}>
                <Form.Select
                  name="billingCycle"
                  value={newPlan.billingCycle}
                  onChange={handleInputChange}
                >
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>Status</Form.Label>
              <Col sm={10}>
                <Form.Select
                  name="status"
                  value={newPlan.status}
                  onChange={handleInputChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descriptions</Form.Label>
              {newPlan.descriptions.map((desc, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    type="text"
                    value={desc}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                    required={index < 2}
                  />
                  {index >= 2 && (
                    <Button
                      variant="outline-danger"
                      className="ms-2"
                      onClick={() => removeDescriptionField(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={addDescriptionField}
              >
                Add Another Description
              </Button>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add Plan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default PlansPackages;