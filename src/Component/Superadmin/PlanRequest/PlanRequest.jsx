import React, { useState } from 'react';

const PlanRequest = () => {
    const [plans, setPlans] = useState([
        {
            id: '1',
            company: 'Zensoft Pvt Ltd',
            email: 'orp@example.com',
            plan: 'Gold',
            billing: 'Yearly',
            date: '2025-06-28',
            status: 'Pending'
        },
        {
            id: '2',
            company: 'BrightIdea Co',
            email: 'rijo@example.com',
            plan: 'Premium',
            billing: 'Monthly',
            date: '2025-06-30',
            status: 'Approved'
        },
        {
            id: '3',
            company: 'NextGen Corp',
            email: 'john@example.com',
            plan: 'Basic',
            billing: 'Monthly',
            date: '2025-07-01',
            status: 'Rejected'
        },
        {
            id: '4',
            company: 'InnoTech Global',
            email: 'hello@example.com',
            plan: 'Silver',
            billing: 'Monthly',
            date: '2025-06-25',
            status: 'Pending'
        },
        {
            id: '5',
            company: 'ThinkByte Solutions',
            email: 'karen@example.com',
            plan: 'Premium',
            billing: 'Yearly',
            date: '2025-06-28',
            status: 'Approved'
        },
        {
            id: '6',
            company: 'AlphaTech Ltd',
            email: 'maxm@example.com',
            plan: 'Gold',
            billing: 'Yearly',
            date: '2025-07-01',
            status: 'Pending'
        },
        {
            id: '7',
            company: 'BlueDream Inc',
            email: 'viktor@example.com',
            plan: 'Basic',
            billing: 'Monthly',
            date: '2025-07-02',
            status: 'Approved'
        },
        {
            id: '8',
            company: 'Craft Digital',
            email: 'angel@example.com',
            plan: 'Premium',
            billing: 'Monthly',
            date: '2025-07-03',
            status: 'Rejected'
        },
        {
            id: '9',
            company: 'Swift Solutions',
            email: 'tom@example.com',
            plan: 'Silver',
            billing: 'Monthly',
            date: '2025-07-04',
            status: 'Pending'
        },
        {
            id: '10',
            company: 'Glow360',
            email: 'divya@example.com',
            plan: 'Basic',
            billing: 'Yearly',
            date: '2025-07-05',
            status: 'Pending'
        },
        {
            id: '11',
            company: 'BrightVision Ltd',
            email: 'tonya@example.com',
            plan: 'Premium',
            billing: 'Yearly',
            date: '2025-07-06',
            status: 'Approved'
        },
        {
            id: '12',
            company: 'WebCraft',
            email: 'raj@example.com',
            plan: 'Gold',
            billing: 'Monthly',
            date: '2025-07-06',
            status: 'Rejected'
        },
        {
            id: '13',
            company: 'SchedLogic Inc',
            email: 'rita@example.com',
            plan: 'Basic',
            billing: 'Monthly',
            date: '2025-07-07',
            status: 'Pending'
        },
        {
            id: '14',
            company: 'ZenWare',
            email: 'marshall@example.com',
            plan: 'Premium',
            billing: 'Yearly',
            date: '2025-07-07',
            status: 'Approved'
        },
        {
            id: '15',
            company: 'Evolved',
            email: 'alta@example.com',
            plan: 'Silver',
            billing: 'Monthly',
            date: '2025-07-08',
            status: 'Pending'
        }
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    // Handle approve action
    const handleApprove = (id) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, status: 'Approved' } : plan
        ));
    };

    // Handle reject action
    const handleReject = (id) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, status: 'Rejected' } : plan
        ));
    };

    // Filter plans based on search term and status filter
    const filteredPlans = plans.filter(plan => {
        const matchesSearch =
            plan.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plan.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plan.plan.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'All' || plan.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPlans = filteredPlans.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPlans.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-warning text-dark';
            case 'Approved':
                return 'bg-success';
            case 'Rejected':
                return 'bg-danger';
            default:
                return 'bg-secondary';
        }
    };

    const getPlanBadge = (plan) => {
        switch (plan) {
            case 'Gold':
                return 'bg-warning text-dark';
            case 'Premium':
                return 'bg-info text-dark';
            case 'Basic':
                return 'bg-primary';
            case 'Silver':
                return 'bg-secondary';
            default:
                return 'bg-light text-dark';
        }
    };

    return (
        <>
            <div className="">
                <div className="">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-4">
                        <i className="fas fa-file-alt text-primary me-2 fs-5"></i>
                        <h4 className="mb-0 fw-bold text-dark">Requested Plans</h4>
                    </div>

                    {/* Search and Filter */}
                    <div className="row mb-4">
                        <div className="col-md-4 ">
                            <div className="input-group mb-2">
                                <span className="input-group-text bg-white border-end-0 ">
                                    <i className="fas fa-search text-muted"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-start-0 "
                                    placeholder="Search by company, email or plan..."
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <select
                                className="form-select mb-2"
                                value={statusFilter}
                                onChange={(e) => {
                                    setStatusFilter(e.target.value);
                                    setCurrentPage(1);
                                }}
                            >
                                <option value="All">All Statuses</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end mb-2 ">
                            <button className="btn btn-primary">
                                <i className="fas fa-download me-2"></i> Export
                            </button>
                        </div>
                    </div>

                    {/* Table Card */}
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead style={{ backgroundColor: '#f8f9fa' }}>
                                        <tr>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Company
                                            </th>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Email
                                            </th>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Plan
                                            </th>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Billing
                                            </th>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Date
                                            </th>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Status
                                            </th>
                                            <th className="px-4 py-3 text-uppercase fw-semibold text-muted small border-0">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentPlans.length > 0 ? (
                                            currentPlans.map((plan, index) => (
                                                <tr key={plan.id} className={index % 2 === 0 ? 'bg-white' : 'bg-light bg-opacity-25'}>
                                                    <td className="px-4 py-3 fw-medium text-dark border-0">
                                                        {plan.company}
                                                    </td>
                                                    <td className="px-4 py-3 text-muted border-0">
                                                        {plan.email}
                                                    </td>
                                                    <td className="px-4 py-3 border-0">
                                                        <span className={`badge ${getPlanBadge(plan.plan)} px-3 py-2 rounded-pill fw-medium`}>
                                                            {plan.plan}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-dark border-0">
                                                        {plan.billing}
                                                    </td>
                                                    <td className="px-4 py-3 text-muted border-0">
                                                        {plan.date}
                                                    </td>
                                                    <td className="px-4 py-3 border-0">
                                                        <span className={`badge ${getStatusBadge(plan.status)} px-3 py-2 rounded-pill fw-medium`}>
                                                            {plan.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 border-0">
                                                        <div className="d-flex gap-2">
                                                            <button
                                                                className={`btn btn-outline-primary btn-sm px-3 py-1 rounded-pill fw-medium ${plan.status === 'Approved' ? 'disabled' : ''}`}
                                                                onClick={() => handleApprove(plan.id)}
                                                            >
                                                                Approve
                                                            </button>
                                                            <button
                                                                className={`btn btn-outline-danger btn-sm px-3 py-1 rounded-pill fw-medium ${plan.status === 'Rejected' ? 'disabled' : ''}`}
                                                                onClick={() => handleReject(plan.id)}
                                                            >
                                                                Reject
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="text-center py-4">
                                                    No matching records found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Footer */}
                            {filteredPlans.length > 0 && (
                                <div className="d-flex justify-content-between align-items-center px-4 py-3 border-top bg-light bg-opacity-50">
                                    <div className="text-muted small">
                                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPlans.length)} of {filteredPlans.length} results
                                    </div>
                                    <nav>
                                        <ul className="pagination pagination-sm mb-0">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link border-0 bg-transparent text-primary fw-medium"
                                                    onClick={() => paginate(currentPage - 1)}
                                                >
                                                    <i className="fas fa-chevron-left me-1"></i>
                                                </button>
                                            </li>
                                            {[...Array(totalPages)].map((_, i) => (
                                                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                                    <button
                                                        className="page-link border-0 bg-transparent text-primary fw-medium"
                                                        onClick={() => paginate(i + 1)}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button
                                                    className="page-link border-0 bg-transparent text-primary fw-medium"
                                                    onClick={() => paginate(currentPage + 1)}
                                                >
                                                    <i className="fas fa-chevron-right ms-1"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlanRequest;