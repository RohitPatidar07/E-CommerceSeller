import React, { useState, useEffect } from 'react';

const OrderManagements = () => {
    // Default data structure
    const getDefaultData = () => ({
        kpiData: [
            {
                title: "Today's Orders",
                value: "247",
                change: "+12.5%",
                changeType: "increase",
                icon: "fa-shopping-cart"
            },
            {
                title: "Pending Shipments",
                value: "89",
                change: "-3.2%",
                changeType: "decrease",
                icon: "fa-truck"
            },
            {
                title: "Delivered",
                value: "1,234",
                change: "+8.7%",
                changeType: "increase",
                icon: "fa-check-circle"
            }
        ],
        recentOrders: [
            {
                orderId: "#ORD-2024-001",
                store: "Fashion Hub",
                status: "Processing",
                date: "2 hours ago"
            },
            {
                orderId: "#ORD-2024-002",
                store: "Tech Store",
                status: "Shipped",
                date: "4 hours ago"
            },
            {
                orderId: "#ORD-2024-003",
                store: "Home Decor",
                status: "Delivered",
                date: "6 hours ago"
            },
            {
                orderId: "#ORD-2024-004",
                store: "Sports World",
                status: "Pending",
                date: "8 hours ago"
            },
            {
                orderId: "#ORD-2024-005",
                store: "Book Corner",
                status: "Cancelled",
                date: "10 hours ago"
            }
        ],
        selectedPeriod: '7days'
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
            showModal: false
        };
    });

    // Save to localStorage when data changes
    useEffect(() => {
        const saveData = {
            kpiData: dashboardData.kpiData,
            recentOrders: dashboardData.recentOrders,
            selectedPeriod: dashboardData.selectedPeriod
        };

        try {
            localStorage.setItem('orderDashboardData', JSON.stringify(saveData));
            console.log('Data saved to LocalStorage:', saveData); // Debug log
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

    // Initialize chart
    useEffect(() => {
        const initializeChart = () => {
            const ctx = document.getElementById('orderTrendsChart');
            if (!ctx) return;

            const context = ctx.getContext('2d');
            if (!context) return;

            // Clear previous chart
            context.clearRect(0, 0, ctx.width, ctx.height);
            ctx.width = ctx.offsetWidth;
            ctx.height = 400;

            // Draw background
            context.fillStyle = '#f8f9fa';
            context.fillRect(0, 0, ctx.width, ctx.height);

            // Draw title
            context.fillStyle = '#495057';
            context.font = '16px Arial';
            context.fillText('Order Trends Chart', 20, 30);

            // Prepare data based on selected period
            const days = dashboardData.selectedPeriod === '7days'
                ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                : dashboardData.selectedPeriod === '30days'
                    ? Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`)
                    : Array.from({ length: 3 }, (_, i) => `Month ${i + 1}`);

            const orders = dashboardData.selectedPeriod === '7days'
                ? [120, 132, 101, 134, 90, 230, 210]
                : dashboardData.selectedPeriod === '30days'
                    ? [450, 520, 600, 580]
                    : [1800, 2100, 2400];

            const barWidth = (ctx.width - 100) / days.length;
            const maxOrder = Math.max(...orders);

            // Draw bars
            days.forEach((day, index) => {
                const barHeight = (orders[index] / maxOrder) * 300;
                const x = 50 + index * barWidth;
                const y = ctx.height - 80 - barHeight;

                context.fillStyle = '#0d6efd';
                context.fillRect(x, y, barWidth - 10, barHeight);

                context.fillStyle = '#495057';
                context.font = '12px Arial';
                context.fillText(day, x, ctx.height - 20);
                context.fillText(orders[index].toString(), x, y - 5);
            });
        };

        // Add slight delay to ensure DOM is ready
        const timer = setTimeout(initializeChart, 50);
        return () => clearTimeout(timer);
    }, [dashboardData.selectedPeriod]);

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

    const closeModal = () => {
        setDashboardData(prev => ({
            ...prev,
            showModal: false,
            editingOrder: null
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

    const { kpiData, recentOrders, selectedPeriod, showModal, editingOrder } = dashboardData;

    return (
        <div className="">
            <div className="">
                {/* Welcome Section */}
                <div className="mb-4">
                    <div className="">
                        <h1 className="h3 fw-bold text-dark mb-2">Welcome back, Sarah!</h1>
                        <p className="card-text text-muted mb-0">Here's what's happening with your business today.</p>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="row mb-4">
                    {kpiData.map((kpi, index) => (
                        <div key={index} className="col-md-4 mb-3 mb-md-0">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="flex-grow-1">
                                            <h6 className="card-subtitle mb-2 text-muted fw-medium">{kpi.title}</h6>
                                            <h3 className="card-title mb-2 fw-bold">{kpi.value}</h3>
                                            <small className={`fw-medium ${kpi.changeType === 'increase' ? 'text-success' : 'text-danger'}`}>
                                                {kpi.changeType === 'increase' ? '↗' : '↘'} {kpi.change}
                                            </small>
                                        </div>
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle ms-3">
                                            <i className={`fas ${kpi.icon} text-primary fs-4`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Trends Graph */}
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="card-title h5 mb-0 fw-bold">Order Trends</h2>
                            <div className="btn-group" role="group">
                                <button
                                    onClick={() => handlePeriodChange('7days')}
                                    className={`btn btn-sm fw-medium ${selectedPeriod === '7days' ? 'btn-primary' : 'btn-outline-secondary'}`}
                                >
                                    7 Days
                                </button>
                                <button
                                    onClick={() => handlePeriodChange('30days')}
                                    className={`btn btn-sm fw-medium ${selectedPeriod === '30days' ? 'btn-primary' : 'btn-outline-secondary'}`}
                                >
                                    30 Days
                                </button>
                                <button
                                    onClick={() => handlePeriodChange('90days')}
                                    className={`btn btn-sm fw-medium ${selectedPeriod === '90days' ? 'btn-primary' : 'btn-outline-secondary'}`}
                                >
                                    90 Days
                                </button>
                            </div>
                        </div>
                        <div className="border rounded p-3 bg-white">
                            <canvas
                                id="orderTrendsChart"
                                width="100%"
                                height="400"
                                className="w-100"
                                style={{ height: '400px' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Recent Activities */}
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title h5 mb-4 fw-bold">Recent Activities</h2>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" className="fw-semibold">Order ID</th>
                                        <th scope="col" className="fw-semibold">Store</th>
                                        <th scope="col" className="fw-semibold">Status</th>
                                        <th scope="col" className="fw-semibold">Date</th>
                                        <th scope="col" className="fw-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentOrders.map((order) => (
                                        <tr key={order.orderId}>
                                            <td className="fw-medium text-primary">{order.orderId}</td>
                                            <td className="fw-medium">{order.store}</td>
                                            <td>
                                                <span className={`badge ${getStatusBadgeClass(order.status)} px-3 py-2 rounded-pill fw-medium`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="text-muted">{order.date}</td>
                                            <td>
                                                <button
                                                    className="btn btn-sm btn-primary me-2"
                                                    onClick={() => openEditModal(order)}
                                                >
                                                    <i className="fas fa-edit me-1"></i> Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => deleteOrder(order.orderId)}
                                                >
                                                    <i className="fas fa-trash me-1"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Edit Order Modal */}
                {showModal && editingOrder && (
                    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Order</h5>
                                    <button type="button" className="btn-close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
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
                                    <div className="mb-3">
                                        <label className="form-label">Store</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="store"
                                            value={editingOrder.store}
                                            onChange={handleEditChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Status</label>
                                        <select
                                            className="form-select"
                                            name="status"
                                            value={editingOrder.status}
                                            onChange={handleEditChange}
                                        >
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
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
            </div>
        </div>
    );
};

export default OrderManagements;