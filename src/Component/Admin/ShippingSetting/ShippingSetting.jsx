import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaTruck, FaSave, FaChevronLeft, FaChevronRight, FaChevronDown, FaExclamationTriangle } from 'react-icons/fa';

const ShippingSetting = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCourier, setSelectedCourier] = useState(null);
    const [pickupForm, setPickupForm] = useState({ addressLine: '', city: '', state: '', pincode: '', phone: '' });

    const couriers = [
        { id: 1, name: 'FedEx Express', apiKey: 'FDX_API_2024_001', status: true },
        { id: 2, name: 'DHL Worldwide', apiKey: 'DHL_API_2024_002', status: true },
        { id: 3, name: 'UPS Ground', apiKey: 'UPS_API_2024_003', status: false },
        { id: 4, name: 'USPS Priority', apiKey: 'USPS_API_2024_004', status: true },
        { id: 5, name: 'Blue Dart', apiKey: 'BD_API_2024_005', status: false }
    ];

    const handleInputChange = (field, value) => {
        setPickupForm(prev => ({ ...prev, [field]: value }));
    };

    const handleDeleteClick = (courierName) => {
        setSelectedCourier(courierName);
        setShowDeleteModal(true);
    };

    return (
        <div className="">
            <div className="">
                <div className="mb-4">
                    <h1 className="h3 fw-bold text-dark mb-2">Shipping Settings</h1>
                    <p className="text-muted">Manage your courier services and pickup addresses for efficient order fulfillment.</p>
                </div>

                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Courier Table</h5>
                        <button className="btn btn-primary btn-sm" onClick={() => setShowAddModal(true)}>
                            <FaPlus className="me-2" /> Add New Courier
                        </button>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Courier Name</th>
                                    <th>API Key</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {couriers.map(courier => (
                                    <tr key={courier.id}>
                                        <td><FaTruck className="text-primary me-2" />{courier.name}</td>
                                        <td><code>{courier.apiKey}</code></td>
                                        <td>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" checked={courier.status} readOnly />
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-link text-primary btn-sm me-2" onClick={() => { setSelectedCourier(courier); setShowEditModal(true); }}>
                                                <FaEdit className="me-1" />Edit
                                            </button>
                                            <button className="btn btn-link text-danger btn-sm" onClick={() => handleDeleteClick(courier.name)}>
                                                <FaTrash className="me-1" />Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <small className="text-muted">Showing 1 to 5 of 5 results</small>
                        <div>
                            <button className="btn btn-outline-secondary btn-sm me-1"><FaChevronLeft /></button>
                            <button className="btn btn-primary btn-sm me-1">1</button>
                            <button className="btn btn-outline-secondary btn-sm"><FaChevronRight /></button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Pickup Address</h5>
                        <p className="text-muted mb-0">Configure your default pickup location for order collections.</p>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-12">
                                <label className="form-label">Address Line</label>
                                <input type="text" className="form-control" value={pickupForm.addressLine} onChange={e => handleInputChange('addressLine', e.target.value)} placeholder="Enter your complete address" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" value={pickupForm.city} onChange={e => handleInputChange('city', e.target.value)} placeholder="Enter city name" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">State</label>
                                <select className="form-select">
                                    <option>Select state</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Pincode</label>
                                <input type="text" className="form-control" value={pickupForm.pincode} onChange={e => handleInputChange('pincode', e.target.value)} placeholder="Enter pincode" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input type="tel" className="form-control" value={pickupForm.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="Enter phone number" />
                            </div>
                        </div>
                        <div className="mt-4 text-end">
                            <button className="btn btn-primary">
                                <FaSave className="me-2" />Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Add/Edit/Delete Modals */}
                {showAddModal && (
                    <Modal title="Add New Courier" onClose={() => setShowAddModal(false)}>
                        <CourierForm />
                    </Modal>
                )}

                {showEditModal && (
                    <Modal title="Edit Courier" onClose={() => setShowEditModal(false)}>
                        <CourierForm courier={selectedCourier} />
                    </Modal>
                )}

                {showDeleteModal && (
                    <Modal title="Confirm Deletion" onClose={() => setShowDeleteModal(false)}>
                        <div className="d-flex align-items-center mb-3">
                            <FaExclamationTriangle className="text-danger me-2 fs-4" />
                            <h5 className="mb-0">Confirm Deletion</h5>
                        </div>
                        <p>Are you sure you want to delete <strong>{selectedCourier}</strong>? This action cannot be undone.</p>
                        <div className="text-end">
                            <button className="btn btn-secondary me-2" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                            <button className="btn btn-danger" onClick={() => { setShowDeleteModal(false); setSelectedCourier(null); }}>Delete Courier</button>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

const Modal = ({ title, onClose, children }) => (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    </div>
);

const CourierForm = ({ courier = {} }) => (
    <form className="vstack gap-3">
        <div>
            <label className="form-label">Courier Name</label>
            <input type="text" className="form-control" defaultValue={courier.name || ''} placeholder="Enter courier name" />
        </div>
        <div>
            <label className="form-label">API Key</label>
            <input type="text" className="form-control" defaultValue={courier.apiKey || ''} placeholder="Enter API key" />
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" defaultChecked={courier.status || false} />
            <label className="form-check-label">Enable this courier</label>
        </div>
        <div className="text-end">
            <button type="submit" className="btn btn-primary">Save Courier</button>
        </div>
    </form>
);

export default ShippingSetting;
