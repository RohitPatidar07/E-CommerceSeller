import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Table,
  InputGroup,
  FormControl,
  Badge,
  Pagination,
} from "react-bootstrap";
import {
  FaSearch,
  FaFilter,
  FaBan,
  FaArrowUp,
  FaKey,
  FaChevronLeft,
  FaChevronRight,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

const UserManagements = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const users = [
    { id: "USR-2024-001", email: "sarah.johnson@email.com", plan: "Premium", ordersUsed: 247, status: "Active" },
    { id: "USR-2024-002", email: "mike.chen@email.com", plan: "Standard", ordersUsed: 89, status: "Active" },
    { id: "USR-2024-003", email: "emma.davis@email.com", plan: "Basic", ordersUsed: 156, status: "Suspended" },
    { id: "USR-2024-004", email: "alex.wilson@email.com", plan: "Premium", ordersUsed: 324, status: "Active" },
    { id: "USR-2024-005", email: "lisa.brown@email.com", plan: "Standard", ordersUsed: 78, status: "Inactive" },
    { id: "USR-2024-006", email: "david.miller@email.com", plan: "Basic", ordersUsed: 45, status: "Active" },
    { id: "USR-2024-007", email: "sophia.garcia@email.com", plan: "Premium", ordersUsed: 289, status: "Active" },
    { id: "USR-2024-008", email: "james.taylor@email.com", plan: "Standard", ordersUsed: 134, status: "Suspended" },
  ];

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusVariant = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Suspended":
        return "danger";
      case "Inactive":
        return "warning";
      default:
        return "secondary";
    }
  };

  const getPlanVariant = (plan) => {
    switch (plan) {
      case "Premium":
        return "primary";
      case "Standard":
        return "info";
      case "Basic":
        return "secondary";
      default:
        return "light";
    }
  };

  const handleAction = (action, user) => {
    setSelectedUser(user);
    if (action === "suspend") setShowSuspendModal(true);
    else if (action === "upgrade") setShowUpgradeModal(true);
    else if (action === "reset") setShowResetModal(true);
  };

  const closeModals = () => {
    setShowSuspendModal(false);
    setShowUpgradeModal(false);
    setShowResetModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="">
      <h1 className="h3 fw-bold text-dark mb-2">User Management</h1>
      <p>Manage user accounts, plans, and permissions across your platform.</p>

      <Row className="bg-white shadow p-3 my-3 rounded">
        <Col md={9}>
          <InputGroup>
            <InputGroup.Text><FaSearch /></InputGroup.Text>
            <FormControl
              placeholder="Search by email or user ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={3} className="text-end">
          <Button variant="primary">
            <FaFilter className="me-1" /> Filter
          </Button>
        </Col>
      </Row>

      <Table bordered hover responsive className="bg-white shadow rounded">
        <thead className="table-light">
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Plan</th>
            <th>Orders Used</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td><Badge bg={getPlanVariant(user.plan)}>{user.plan}</Badge></td>
              <td>{user.ordersUsed}</td>
              <td><Badge bg={getStatusVariant(user.status)}>{user.status}</Badge></td>
              <td className="d-flex gap-2">
                <Button variant="outline-danger" size="sm" onClick={() => handleAction("suspend", user)}>
                  <FaBan className="me-1" /> Suspend
                </Button>
                <Button variant="outline-primary" size="sm" onClick={() => handleAction("upgrade", user)}>
                  <FaArrowUp className="me-1" /> Upgrade
                </Button>
                <Button variant="outline-secondary" size="sm" onClick={() => handleAction("reset", user)}>
                  <FaKey className="me-1" /> Reset
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <small>
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of {filteredUsers.length} results
        </small>
        <Pagination className="mb-0">
          <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
            <FaChevronLeft />
          </Pagination.Prev>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Pagination.Item>
          ))}
          <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}>
            <FaChevronRight />
          </Pagination.Next>
        </Pagination>
      </div>

      <Modal show={showSuspendModal} onHide={closeModals} centered>
        <Modal.Header closeButton>
          <Modal.Title><FaExclamationTriangle className="text-danger me-2" /> Suspend User Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to suspend <strong>{selectedUser?.email}</strong>? This will prevent login.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModals}>Cancel</Button>
          <Button variant="danger" onClick={closeModals}>Suspend Account</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpgradeModal} onHide={closeModals} centered>
        <Modal.Header closeButton>
          <Modal.Title><FaArrowUp className="text-primary me-2" /> Upgrade Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select a new plan for <strong>{selectedUser?.email}</strong></p>
          <Form>
            {[
              { value: "Basic", label: "Basic Plan ($9.99/month - 100 orders)" },
              { value: "Standard", label: "Standard Plan ($19.99/month - 500 orders)" },
              { value: "Premium", label: "Premium Plan ($39.99/month - Unlimited orders)" },
            ].map((plan) => (
              <Form.Check
                type="radio"
                label={plan.label}
                name="plan"
                value={plan.value}
                key={plan.value}
                className="mb-2"
              />
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModals}>Cancel</Button>
          <Button variant="primary" onClick={closeModals}>Upgrade Plan</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showResetModal} onHide={closeModals} centered>
        <Modal.Header closeButton>
          <Modal.Title><FaKey className="text-warning me-2" /> Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Send a password reset email to <strong>{selectedUser?.email}</strong>?</p>
          <div className="alert alert-warning d-flex align-items-start">
            <FaInfoCircle className="me-2 mt-1" />
            <div>The user will receive a reset link. Their current password remains active until reset completes.</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModals}>Cancel</Button>
          <Button variant="primary" onClick={closeModals}>Send Reset Email</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagements;
