import React, { useState } from 'react';
import {
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const AdminDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7 Days');

  const kpiData = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      changeType: 'positive',
      icon: <FaUsers className="text-primary fs-4" />
    },
    {
      title: 'Total Orders This Month',
      value: '1,234',
      change: '+8.7%',
      changeType: 'positive',
      icon: <FaShoppingCart className="text-primary fs-4" />
    },
    {
      title: 'Revenue from Sub-users',
      value: '$45,890',
      change: '-3.2%',
      changeType: 'negative',
      icon: <FaDollarSign className="text-primary fs-4" />
    }
  ];

  const recentActivities = [
    {
      id: '#USR-2024-001',
      user: 'John Smith',
      action: 'Created new account',
      date: '2 hours ago'
    },
    {
      id: '#USR-2024-002',
      user: 'Sarah Johnson',
      action: 'Updated profile settings',
      date: '4 hours ago'
    },
    {
      id: '#USR-2024-003',
      user: 'Mike Wilson',
      action: 'Placed order #ORD-789',
      date: '6 hours ago'
    },
    {
      id: '#USR-2024-004',
      user: 'Emma Davis',
      action: 'Cancelled subscription',
      date: '8 hours ago'
    },
    {
      id: '#USR-2024-005',
      user: 'David Brown',
      action: 'Made payment $299',
      date: '10 hours ago'
    }
  ];

  const chartData = [
    { name: 'Mon', orders: 240, revenue: 400 },
    { name: 'Tue', orders: 139, revenue: 300 },
    { name: 'Wed', orders: 200, revenue: 278 },
    { name: 'Thu', orders: 278, revenue: 390 },
    { name: 'Fri', orders: 189, revenue: 480 },
    { name: 'Sat', orders: 349, revenue: 430 },
    { name: 'Sun', orders: 300, revenue: 460 }
  ];

  return (
    <div className="">
      <div className="">
        <div className="mb-4">
          <h1 className="h3 fw-bold text-dark mb-2">Welcome back, Admin!</h1>
          <p className="text-muted">Here's what's happening with your platform today.</p>
        </div>

        {/* KPI Cards */}
        <div className="row g-3 mb-4">
          {kpiData.map((kpi, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-muted fw-medium">{kpi.title}</small>
                    <div className="bg-primary-subtle p-2 rounded-circle">
                      {kpi.icon}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-end">
                    <h4 className="mb-0 fw-bold">{kpi.value}</h4>
                    <span
                      className={`small fw-medium d-flex align-items-center ${
                        kpi.changeType === 'positive' ? 'text-success' : 'text-danger'
                      }`}
                    >
                      {kpi.changeType === 'positive' ? <FaArrowUp className="me-1" /> : <FaArrowDown className="me-1" />}
                      {kpi.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Trends Chart */}
        <div className="card shadow-sm border-0 mb-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold mb-0">Monthly Order Trends</h5>
              <div className="btn-group">
                {['7 Days', '30 Days', '90 Days'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`btn btn-sm ${selectedPeriod === period ? 'btn-primary' : 'btn-outline-secondary'}`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#28a745" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="orders" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="card shadow-sm border-0">
          <div className="card-header bg-white">
            <h5 className="fw-semibold mb-0">Recent Activities</h5>
          </div>
          <div className="table-responsive">
            <table className="table mb-0">
              <thead className="table-light">
                <tr>
                  <th>USER ID</th>
                  <th>USER</th>
                  <th>ACTION</th>
                  <th>DATE/TIME</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.id}</td>
                    <td>{activity.user}</td>
                    <td>{activity.action}</td>
                    <td>{activity.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;