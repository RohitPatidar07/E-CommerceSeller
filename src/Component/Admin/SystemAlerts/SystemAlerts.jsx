import React, { useState } from 'react';
import { Container, Row, Col, Table, Form, Button, Modal, Badge } from 'react-bootstrap';
import { FaSort, FaDownload, FaPlus, FaTimes, FaUser, FaCube, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SystemAlerts = () => {
  const [selectedErrorType, setSelectedErrorType] = useState('All Types');
  const [selectedUser, setSelectedUser] = useState('All Users');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAlert, setNewAlert] = useState({ module: '', error: '', user: '' });

  const errorTypes = ['All Types', 'Database Error', 'API Error', 'Authentication Error', 'Network Error', 'System Error'];
  const users = ['All Users', 'John Smith', 'Sarah Johnson', 'Mike Davis', 'Lisa Chen', 'Tom Wilson'];
  const modules = ['Payment Gateway', 'User Authentication', 'Database', 'Email Service', 'File Upload', 'API Gateway', 'Cache System', 'Notification Service'];

  const alertsData = [
    { id: 1, timestamp: '2025-01-25 14:30:25', module: 'Payment Gateway', error: 'Connection timeout during payment processing', user: 'John Smith', resolved: 'Resolved', status: 'resolved' },
    { id: 2, timestamp: '2025-01-25 13:45:12', module: 'User Authentication', error: 'Failed login attempts exceeded threshold', user: 'Sarah Johnson', resolved: 'Critical', status: 'critical' },
    { id: 3, timestamp: '2025-01-25 12:20:08', module: 'Database', error: 'Query execution timeout on orders table', user: 'Mike Davis', resolved: 'In Progress', status: 'progress' },
    { id: 4, timestamp: '2025-01-25 11:15:33', module: 'Email Service', error: 'SMTP server connection failed', user: 'Lisa Chen', resolved: 'Warning', status: 'warning' },
    { id: 5, timestamp: '2025-01-25 10:45:17', module: 'File Upload', error: 'File size exceeds maximum limit', user: 'Tom Wilson', resolved: 'Resolved', status: 'resolved' },
    { id: 6, timestamp: '2025-01-25 09:30:44', module: 'API Gateway', error: 'Rate limit exceeded for external API calls', user: 'John Smith', resolved: 'Critical', status: 'critical' },
    { id: 7, timestamp: '2025-01-25 08:55:21', module: 'Cache System', error: 'Redis connection pool exhausted', user: 'Sarah Johnson', resolved: 'Warning', status: 'warning' },
    { id: 8, timestamp: '2025-01-25 08:20:15', module: 'Notification Service', error: 'Push notification delivery failed', user: 'Mike Davis', resolved: 'In Progress', status: 'progress' }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case 'resolved': return 'success';
      case 'critical': return 'danger';
      case 'warning': return 'warning';
      case 'progress': return 'primary';
      default: return 'secondary';
    }
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(alertsData.length / itemsPerPage);
  const currentAlerts = alertsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="">
      <h1 className="h3 fw-bold text-dark mb-2">System Alerts</h1>
      <p className="text-muted">Monitor and manage system alerts and error notifications</p>

      <Row className="my-4">
        <Col md={3}>
          <Form.Group>
            <Form.Label>Error Type</Form.Label>
            <Form.Select value={selectedErrorType} onChange={(e) => setSelectedErrorType(e.target.value)}>
              {errorTypes.map(type => <option key={type}>{type}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>User</Form.Label>
            <Form.Select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
              {users.map(user => <option key={user}>{user}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6} className="d-flex align-items-end justify-content-end gap-2">
          <Button variant="outline-secondary"><FaDownload className="me-2" />Export</Button>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}><FaPlus className="me-2" />Create Alert</Button>
        </Col>
      </Row>

      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            {['timestamp', 'module', 'error', 'user', 'resolved'].map(col => (
              <th key={col} onClick={() => handleSort(col)} style={{ cursor: 'pointer' }}>
                <div className="d-flex align-items-center gap-1 text-uppercase">
                  {col}
                  <FaSort className={sortColumn === col ? 'text-primary' : 'text-muted'} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentAlerts.map(alert => (
            <tr key={alert.id}>
              <td>{alert.timestamp}</td>
              <td><FaCube className="me-2 text-primary" />{alert.module}</td>
              <td>{alert.error}</td>
              <td><FaUser className="me-2 text-secondary" />{alert.user}</td>
              <td><Badge bg={getStatusVariant(alert.status)}>{alert.resolved}</Badge></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center">
        <div>Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, alertsData.length)} of {alertsData.length} results</div>
        <div>
          <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}><FaChevronLeft /></Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <Button key={page} variant={currentPage === page ? 'primary' : 'outline-secondary'} size="sm" onClick={() => setCurrentPage(page)} className="mx-1">{page}</Button>
          ))}
          <Button variant="outline-secondary" size="sm" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}><FaChevronRight /></Button>
        </div>
      </div>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Module</Form.Label>
            <Form.Select value={newAlert.module} onChange={(e) => setNewAlert({ ...newAlert, module: e.target.value })}>
              <option value="">Select Module</option>
              {modules.map(mod => <option key={mod}>{mod}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Error Description</Form.Label>
            <Form.Control as="textarea" rows={3} maxLength={500} value={newAlert.error} onChange={(e) => setNewAlert({ ...newAlert, error: e.target.value })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>User</Form.Label>
            <Form.Select value={newAlert.user} onChange={(e) => setNewAlert({ ...newAlert, user: e.target.value })}>
              <option value="">Select User</option>
              {users.slice(1).map(user => <option key={user}>{user}</option>)}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>Create Alert</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SystemAlerts;
