import React, { useState, useEffect } from 'react';

const OrderManagement = () => {
    // Default data structure with customer information and platform
    const getDefaultData = () => ({
        kpiData: [
            {
                title: "Total Orders",
                value: "1,589",
                change: "+8.2%",
                changeType: "increase",
                icon: "fa-shopping-cart"
            },
            {
                title: "Pending Orders",
                value: "247",
                change: "-2.5%",
                changeType: "decrease",
                icon: "fa-clock"
            },
            {
                title: "Shipped Orders",
                value: "1,089",
                change: "+12.7%",
                changeType: "increase",
                icon: "fa-truck"
            },
            {
                title: "Delivered Orders",
                value: "1,234",
                change: "+8.7%",
                changeType: "increase",
                icon: "fa-check-circle"
            }
        ],
        recentOrders: [
            {
                orderId: "#ORD-2024-001",
                customer: "Rahul Sharma",
                customerEmail: "rahul.sharma@example.com",
                customerPhone: "+91 9876543210",
                platform: "Amazon",
                store: "Fashion Hub",
                status: "Processing",
                date: "2 hours ago",
                amount: "₹1,499",
                shippingAddress: "123, Main Street, Mumbai, Maharashtra 400001"
            },
            {
                orderId: "#ORD-2024-002",
                customer: "Priya Patel",
                customerEmail: "priya.patel@example.com",
                customerPhone: "+91 8765432109",
                platform: "Meesho",
                store: "Tech Store",
                status: "Shipped",
                date: "4 hours ago",
                amount: "₹3,299",
                shippingAddress: "456, Park Avenue, Bangalore, Karnataka 560001"
            },
            {
                orderId: "#ORD-2024-003",
                customer: "Amit Singh",
                customerEmail: "amit.singh@example.com",
                customerPhone: "+91 7654321098",
                platform: "Amazon",
                store: "Home Decor",
                status: "Delivered",
                date: "6 hours ago",
                amount: "₹2,499",
                shippingAddress: "789, Hill Road, Pune, Maharashtra 411001"
            },
            {
                orderId: "#ORD-2024-004",
                customer: "Neha Gupta",
                customerEmail: "neha.gupta@example.com",
                customerPhone: "+91 6543210987",
                platform: "Meesho",
                store: "Sports World",
                status: "Pending",
                date: "8 hours ago",
                amount: "₹1,799",
                shippingAddress: "321, Lake View, Hyderabad, Telangana 500001"
            },
            {
                orderId: "#ORD-2024-005",
                customer: "Vikram Joshi",
                customerEmail: "vikram.joshi@example.com",
                customerPhone: "+91 5432109876",
                platform: "Amazon",
                store: "Book Corner",
                status: "Cancelled",
                date: "10 hours ago",
                amount: "₹899",
                shippingAddress: "654, River Side, Delhi, Delhi 110001"
            }
        ],
        selectedPeriod: '7days',
        filters: {
            platform: 'all',
            status: 'all'
        }
    });

    // Load data from localStorage or use defaults
    const loadData = () => {
        try {
            const savedData = localStorage.getItem('orderDashboardData');
            if (savedData) {
                const parsedData = JSON.parse(savedData);
                // Merge with default data to ensure all fields exist
                return { ...getDefaultData(), ...parsedData };
            }
            return getDefaultData();
        } catch (error) {
            console.error("Error reading from LocalStorage:", error);
            return getDefaultData();
        }
    };

    // Initialize state
    const [dashboardData, setDashboardData] = useState(() => {
        const loadedData = loadData();
        return {
            ...loadedData,
            editingOrder: null,
            showModal: false,
            viewOrder: null,
            showViewModal: false
        };
    });

    // Save to localStorage when data changes
    useEffect(() => {
        const saveData = {
            kpiData: dashboardData.kpiData,
            recentOrders: dashboardData.recentOrders,
            selectedPeriod: dashboardData.selectedPeriod,
            filters: dashboardData.filters
        };

        try {
            localStorage.setItem('orderDashboardData', JSON.stringify(saveData));
        } catch (error) {
            console.error("Error saving to LocalStorage:", error);
        }
    }, [dashboardData]);

    // Handle period change
    const handlePeriodChange = (period) => {
        setDashboardData(prev => ({
            ...prev,
            selectedPeriod: period
        }));
    };

    // Handle filter change
    const handleFilterChange = (filterType, value) => {
        setDashboardData(prev => ({
            ...prev,
            filters: {
                ...prev.filters,
                [filterType]: value
            }
        }));
    };

    // Filter orders based on selected filters
    const filteredOrders = dashboardData.recentOrders.filter(order => {
        const platformMatch = dashboardData.filters.platform === 'all' ||
            order.platform === dashboardData.filters.platform;
        const statusMatch = dashboardData.filters.status === 'all' ||
            order.status === dashboardData.filters.status;
        return platformMatch && statusMatch;
    });

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'Processing': return 'bg-primary';
            case 'Shipped': return 'bg-warning text-dark';
            case 'Delivered': return 'bg-success';
            case 'Pending': return 'bg-info text-dark';
            case 'Cancelled': return 'bg-danger';
            default: return 'bg-secondary';
        }
    };

    const openEditModal = (order) => {
        setDashboardData(prev => ({
            ...prev,
            editingOrder: { ...order },
            showModal: true
        }));
    };

    const openViewModal = (order) => {
        setDashboardData(prev => ({
            ...prev,
            viewOrder: { ...order },
            showViewModal: true
        }));
    };

    const closeModal = () => {
        setDashboardData(prev => ({
            ...prev,
            showModal: false,
            showViewModal: false,
            editingOrder: null,
            viewOrder: null
        }));
    };

    const saveEdit = () => {
        if (!dashboardData.editingOrder) return;

        setDashboardData(prev => {
            const updatedOrders = prev.recentOrders.map(order =>
                order.orderId === prev.editingOrder.orderId ? prev.editingOrder : order
            );

            return {
                ...prev,
                recentOrders: updatedOrders,
                showModal: false,
                editingOrder: null
            };
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setDashboardData(prev => ({
            ...prev,
            editingOrder: {
                ...prev.editingOrder,
                [name]: value
            }
        }));
    };

    const deleteOrder = (orderId) => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            setDashboardData(prev => ({
                ...prev,
                recentOrders: prev.recentOrders.filter(order => order.orderId !== orderId)
            }));
        }
    };

    const { kpiData, recentOrders, selectedPeriod, filters, showModal, editingOrder, showViewModal, viewOrder } = dashboardData;

    return (
        <div className="">
            <div className="row">
                {/* Welcome Section */}
                <div className="col-12 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="h3 fw-bold text-dark mb-0">Order Management</h1>
                    
                    </div>
                    <p className="text-muted mb-0">All orders (from all platforms) appear in one table</p>
                </div>

                {/* KPI Cards */}
                <div className="col-12 mb-4">
                    <div className="row">
                        {kpiData.map((kpi, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="card shadow-sm border-0 h-100">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="text-muted mb-2">{kpi.title}</h6>
                                                <h3 className="mb-0">{kpi.value}</h3>
                                                <small className={`text-${kpi.changeType === 'increase' ? 'success' : 'danger'}`}>
                                                    {kpi.change} from last period
                                                </small>
                                            </div>
                                            <div className={`bg-${kpi.changeType === 'increase' ? 'success' : 'danger'}-light p-3 rounded`}>
                                                <i className={`fas ${kpi.icon} text-${kpi.changeType === 'increase' ? 'success' : 'danger'} fa-2x`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Orders Table */}
                <div className="col-12">
                        <div className="d-flex">
                            <div className="me-3">
                                <label className="form-label">Platform</label>
                                <select
                                    className="form-select form-select-sm"
                                    value={filters.platform}
                                    onChange={(e) => handleFilterChange('platform', e.target.value)}
                                >
                                    <option value="all">All Platforms</option>
                                    <option value="Amazon">Amazon</option>
                                    <option value="Meesho">Meesho</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label">Status</label>
                                <select
                                    className="form-select form-select-sm"
                                    value={filters.status}
                                    onChange={(e) => handleFilterChange('status', e.target.value)}
                                >
                                    <option value="all">All Statuses</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                        </div>
                    <div className="card shadow-sm">
                        <div className="card-header bg-white border-0">
                            <h5 className="mb-0">Recent Orders</h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th scope="col" className="fw-semibold">Order ID</th>
                                            <th scope="col" className="fw-semibold">Customer</th>
                                            <th scope="col" className="fw-semibold">Platform</th>
                                            <th scope="col" className="fw-semibold">Amount</th>
                                            <th scope="col" className="fw-semibold">Status</th>
                                            <th scope="col" className="fw-semibold">Date</th>
                                            <th scope="col" className="fw-semibold text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredOrders.map((order) => (
                                            <tr key={order.orderId}>
                                                <td className="fw-medium text-primary">{order.orderId}</td>
                                                <td>
                                                    <div className="d-flex flex-column">
                                                        <span className="fw-medium">{order.customer}</span>
                                                        <small className="text-muted">{order.customerEmail}</small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`badge ${order.platform === 'Amazon' ? 'bg-warning text-dark' : 'bg-info text-dark'} px-3 py-1 rounded-pill`}>
                                                        {order.platform}
                                                    </span>
                                                </td>
                                                <td className="fw-bold">{order.amount}</td>
                                                <td>
                                                    <span className={`badge ${getStatusBadgeClass(order.status)} px-3 py-1 rounded-pill fw-medium`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="text-muted">{order.date}</td>
                                                <td className="text-end">
                                                    <button
                                                        className="btn btn-sm btn-outline-primary me-2"
                                                        onClick={() => openViewModal(order)}
                                                    >
                                                        <i className="fas fa-eye me-1"></i> View
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-primary me-2"
                                                        onClick={() => openEditModal(order)}
                                                    >
                                                        <i className="fas fa-edit me-1"></i> Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() => deleteOrder(order.orderId)}
                                                    >
                                                        <i className="fas fa-trash me-1"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Order Modal */}
            {showModal && editingOrder && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Order #{editingOrder.orderId}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Order ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="orderId"
                                            value={editingOrder.orderId}
                                            onChange={handleEditChange}
                                            disabled
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Platform</label>
                                        <select
                                            className="form-select"
                                            name="platform"
                                            value={editingOrder.platform}
                                            onChange={handleEditChange}
                                        >
                                            <option value="Amazon">Amazon</option>
                                            <option value="Meesho">Meesho</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Customer Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="customer"
                                            value={editingOrder.customer}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Customer Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="customerEmail"
                                            value={editingOrder.customerEmail}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Customer Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="customerPhone"
                                            value={editingOrder.customerPhone}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Store</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="store"
                                            value={editingOrder.store}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Status</label>
                                        <select
                                            className="form-select"
                                            name="status"
                                            value={editingOrder.status}
                                            onChange={handleEditChange}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Amount</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="amount"
                                            value={editingOrder.amount}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Shipping Address</label>
                                        <textarea
                                            className="form-control"
                                            name="shippingAddress"
                                            value={editingOrder.shippingAddress}
                                            onChange={handleEditChange}
                                            rows="3"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="date"
                                            value={editingOrder.date}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary" onClick={saveEdit}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* View Order Modal */}
            {showViewModal && viewOrder && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Order Details #{viewOrder.orderId}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <h6 className="text-muted">Order Information</h6>
                                        <div className="mb-2">
                                            <span className="fw-medium">Order ID:</span> {viewOrder.orderId}
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Platform:</span>
                                            <span className={`badge ${viewOrder.platform === 'Amazon' ? 'bg-warning text-dark' : 'bg-info text-dark'} ms-2`}>
                                                {viewOrder.platform}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Store:</span> {viewOrder.store}
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Status:</span>
                                            <span className={`badge ${getStatusBadgeClass(viewOrder.status)} ms-2`}>
                                                {viewOrder.status}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Amount:</span> {viewOrder.amount}
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Date:</span> {viewOrder.date}
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <h6 className="text-muted">Customer Information</h6>
                                        <div className="mb-2">
                                            <span className="fw-medium">Name:</span> {viewOrder.customer}
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Email:</span> {viewOrder.customerEmail}
                                        </div>
                                        <div className="mb-2">
                                            <span className="fw-medium">Phone:</span> {viewOrder.customerPhone}
                                        </div>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <h6 className="text-muted">Shipping Address</h6>
                                        <div className="card bg-light p-3">
                                            {viewOrder.shippingAddress}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => {
                                    closeModal();
                                    openEditModal(viewOrder);
                                }}>
                                    Edit Order
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderManagement;