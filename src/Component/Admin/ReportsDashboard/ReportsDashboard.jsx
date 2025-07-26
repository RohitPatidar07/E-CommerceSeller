import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Table, Form } from 'react-bootstrap';
import { FaCalendarAlt, FaChevronDown, FaLayerGroup, FaUserCircle, FaDownload, FaEllipsisV, FaUsers, FaShoppingCart, FaDollarSign, FaUndo } from 'react-icons/fa';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ReportsDashboard = () => {
  const [selectedDateRange, setSelectedDateRange] = useState('Last 7 Days');
  const [selectedPlanType, setSelectedPlanType] = useState('All Plans');
  const [userStatus, setUserStatus] = useState('All Users');
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState('CSV');
  const [exportDateRange, setExportDateRange] = useState('Last 30 Days');

  const revenueData = [
    { name: 'Jan', value: 150 },
    { name: 'Feb', value: 230 },
    { name: 'Mar', value: 224 },
    { name: 'Apr', value: 218 },
    { name: 'May', value: 135 },
    { name: 'Jun', value: 147 },
    { name: 'Jul', value: 260 },
  ];

  const orderData = [
    { name: 'Mon', value: 820 },
    { name: 'Tue', value: 932 },
    { name: 'Wed', value: 901 },
    { name: 'Thu', value: 934 },
    { name: 'Fri', value: 1290 },
    { name: 'Sat', value: 1330 },
    { name: 'Sun', value: 1320 },
  ];

  const metricsData = [
    { title: 'Total Users', value: '45,872', change: '+15.3%', icon: <FaUsers />, color: 'primary' },
    { title: 'Total Orders', value: '23,450', change: '+12.5%', icon: <FaShoppingCart />, color: 'success' },
    { title: 'Revenue', value: '$284,750', change: '+8.7%', icon: <FaDollarSign />, color: 'info' },
    { title: 'Refund Rate', value: '2.4%', change: '-0.5%', icon: <FaUndo />, color: 'warning' },
  ];

  const tableData = [
    { metric: 'Average Order Value', value: '$12.15' },
    { metric: 'Conversion Rate', value: '3.24%' },
    { metric: 'Customer Lifetime Value', value: '$145.67' },
    { metric: 'Return Customer Rate', value: '28.5%' },
    { metric: 'Cart Abandonment Rate', value: '69.2%' },
    { metric: 'Monthly Recurring Revenue', value: '$45,230' },
    { metric: 'Customer Acquisition Cost', value: '$23.45' },
    { metric: 'Gross Margin', value: '42.8%' },
  ];

  return (
    <Container fluid className="py-4 px-5 bg-light">
      <header className="mb-4 border-bottom pb-3">
        <h1 className="h3">Reports</h1>
        <p className="text-muted">Here's what's happening with your business today.</p>
      </header>

      <Row className="mb-3">
     
<Col className="d-flex flex-wrap gap-2">
  <DropdownButton
    variant="outline-secondary"
    title={<><FaCalendarAlt className="me-2" />{selectedDateRange}</>}
    className="me-2"
  >
    {['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'].map(option => (
      <Dropdown.Item key={option} onClick={() => setSelectedDateRange(option)}>
        {option}
      </Dropdown.Item>
    ))}
  </DropdownButton>

  <DropdownButton
    variant="outline-secondary"
    title={<><FaLayerGroup className="me-2" />{selectedPlanType}</>}
    className="me-2"
  >
    {['All Plans', 'Basic Plan', 'Premium Plan', 'Enterprise'].map(option => (
      <Dropdown.Item key={option} onClick={() => setSelectedPlanType(option)}>
        {option}
      </Dropdown.Item>
    ))}
  </DropdownButton>

  <DropdownButton
    variant="outline-secondary"
    title={<><FaUserCircle className="me-2" />{userStatus}</>}
    className="me-2"
  >
    {['All Users', 'Active', 'Inactive', 'Pending'].map(option => (
      <Dropdown.Item key={option} onClick={() => setUserStatus(option)}>
        {option}
      </Dropdown.Item>
    ))}
  </DropdownButton>

  <Button variant="primary">Apply Filters</Button>
</Col>
      </Row>

      <Row className="g-3 mb-4">
        {metricsData.map((m, i) => (
          <Col key={i} md={3}>
            <Card className="h-100 border">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <small className="text-muted">{m.title}</small>
                    <h4>{m.value}</h4>
                    <div className={`text-${m.color}`}>{m.change}</div>
                  </div>
                  <div className="bg-light rounded-circle p-3 text-primary">{m.icon}</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-3 mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <h5>Monthly Revenue</h5>
                <div>
                  <Button variant="link"><FaDownload /></Button>
                  <Button variant="link"><FaEllipsisV /></Button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value}k`} />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-3">
                <h5>Order Trends</h5>
                <div>
                  <Button variant="link"><FaDownload /></Button>
                  <Button variant="link"><FaEllipsisV /></Button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={orderData}>
                  <defs>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity={0.2} />
                      <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#10B981" fill="url(#colorGreen)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5>Key Metrics</h5>
          <Button variant="primary" onClick={() => setShowExportModal(true)}><FaDownload className="me-2" />Export</Button>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.metric}</td>
                  <td className="fw-bold">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showExportModal} onHide={() => setShowExportModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Export Reports</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Export Format</Form.Label>
              {['CSV', 'Excel', 'PDF'].map((format) => (
                <Form.Check
                  type="radio"
                  label={format}
                  name="exportFormat"
                  key={format}
                  value={format}
                  checked={exportFormat === format}
                  onChange={(e) => setExportFormat(e.target.value)}
                />
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Label>Date Range</Form.Label>
              <Button className="w-100" variant="outline-secondary" onClick={() => {
                const options = ['Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'];
                const next = (options.indexOf(exportDateRange) + 1) % options.length;
                setExportDateRange(options[next]);
              }}>{exportDateRange} <FaChevronDown className="ms-2" /></Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowExportModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => {
            setShowExportModal(false);
            // Export logic here
          }}>Export</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ReportsDashboard;