import React, { useState, useEffect } from 'react';

const PlansPackages = () => {
  // localStorage key
  const STORAGE_KEY = 'plansPackagesData';

  // Default plans data
  const defaultPlans = [
    {
      id: 1,
      name: 'Bronze',
      price: 9.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['Basic access', 'Community support', 'Limited features'],
      subscribers: 1243,
      createdAt: '2024-01-15',
      lastModified: '2024-01-15'
    },
    {
      id: 2,
      name: 'Silver',
      price: 14.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['Priority email support', 'Extended features', 'Access to updates'],
      subscribers: 857,
      createdAt: '2024-01-20',
      lastModified: '2024-01-20'
    },
    {
      id: 3,
      name: 'Gold',
      price: 24.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['All Silver features', 'Advanced analytics', 'Custom branding'],
      subscribers: 512,
      createdAt: '2024-02-01',
      lastModified: '2024-02-01'
    },
    {
      id: 4,
      name: 'Platinum',
      price: 48.99,
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['All Gold features', 'Dedicated account manager', '24/7 support'],
      subscribers: 326,
      createdAt: '2024-02-10',
      lastModified: '2024-02-10'
    }
  ];

  // Load data from localStorage or use defaults
  const loadPlansFromStorage = () => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        return JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
    return defaultPlans;
  };

  const getSortIcon = (column, sortBy, sortOrder) => {
    if (sortBy !== column) return <i className="bi bi-arrow-down-up"></i>;
    return sortOrder === 'asc' ? (
      <i className="bi bi-arrow-up"></i>
    ) : (
      <i className="bi bi-arrow-down"></i>
    );
  };

  // Save data to localStorage
  const savePlansToStorage = (plansData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plansData));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  };

  const [plans, setPlans] = useState(loadPlansFromStorage);
  const [showModal, setShowModal] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [planToDelete, setPlanToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    billingCycle: 'Monthly',
    status: 'Active',
    descriptions: ['']
  });

  const [errors, setErrors] = useState({});

  // Save to localStorage whenever plans change
  useEffect(() => {
    savePlansToStorage(plans);
  }, [plans]);

  // Generate next ID based on existing plans
  const getNextId = () => {
    return plans.length > 0 ? Math.max(...plans.map(p => p.id)) + 1 : 1;
  };

  // Reset form data
  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      billingCycle: 'Monthly',
      status: 'Active',
      descriptions: ['']
    });
    setErrors({});
    setEditingPlan(null);
  };

  // Clear localStorage and reset to defaults
  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset all data to defaults? This will delete all your custom plans.')) {
      localStorage.removeItem(STORAGE_KEY);
      setPlans(defaultPlans);
    }
  };

  // Export data
  const exportData = () => {
    const dataStr = JSON.stringify(plans, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'plans-packages-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Import data
  const importData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          if (Array.isArray(importedData) && importedData.length > 0) {
            setPlans(importedData);
            alert('Data imported successfully!');
          } else {
            alert('Invalid data format. Please select a valid JSON file.');
          }
        } catch (error) {
          alert('Error importing data. Please check the file format.');
          console.error('Import error:', error);
        }
      };
      reader.readAsText(file);
    }
    // Reset the input
    event.target.value = '';
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Plan name is required';
    } else if (plans.some(p => p.name.toLowerCase() === formData.name.toLowerCase() && p.id !== editingPlan?.id)) {
      newErrors.name = 'Plan name must be unique';
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    if (formData.descriptions.filter(desc => desc.trim()).length === 0) {
      newErrors.descriptions = 'At least one description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Handle description changes
  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...formData.descriptions];
    updatedDescriptions[index] = value;
    setFormData({ ...formData, descriptions: updatedDescriptions });

    if (errors.descriptions) {
      setErrors({ ...errors, descriptions: '' });
    }
  };

  // Add description field
  const addDescriptionField = () => {
    setFormData({
      ...formData,
      descriptions: [...formData.descriptions, '']
    });
  };

  // Remove description field
  const removeDescriptionField = (index) => {
    if (formData.descriptions.length > 1) {
      const updatedDescriptions = [...formData.descriptions];
      updatedDescriptions.splice(index, 1);
      setFormData({ ...formData, descriptions: updatedDescriptions });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const filteredDescriptions = formData.descriptions.filter(desc => desc.trim());

    if (editingPlan) {
      // Update existing plan
      const updatedPlan = {
        ...editingPlan,
        name: formData.name.trim(),
        price: parseFloat(formData.price),
        billingCycle: formData.billingCycle,
        status: formData.status,
        descriptions: filteredDescriptions,
        lastModified: currentDate
      };

      setPlans(plans.map(plan =>
        plan.id === editingPlan.id ? updatedPlan : plan
      ));
    } else {
      // Add new plan
      const newPlan = {
        id: getNextId(),
        name: formData.name.trim(),
        price: parseFloat(formData.price),
        billingCycle: formData.billingCycle,
        status: formData.status,
        descriptions: filteredDescriptions,
        subscribers: 0,
        createdAt: currentDate,
        lastModified: currentDate
      };

      setPlans([...plans, newPlan]);
    }

    setShowModal(false);
    resetForm();
  };

  // Handle edit plan
  const handleEdit = (plan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      price: plan.price.toString(),
      billingCycle: plan.billingCycle,
      status: plan.status,
      descriptions: [...plan.descriptions]
    });
    setShowModal(true);
  };

  // Handle delete plan
  const handleDelete = (plan) => {
    setPlanToDelete(plan);
    setShowDeleteConfirm(true);
  };

  // Confirm delete
  const confirmDelete = () => {
    setPlans(plans.filter(plan => plan.id !== planToDelete.id));
    setShowDeleteConfirm(false);
    setPlanToDelete(null);
  };

  // Toggle plan status
  const toggleStatus = (planId) => {
    setPlans(plans.map(plan =>
      plan.id === planId
        ? {
          ...plan,
          status: plan.status === 'Active' ? 'Inactive' : 'Active',
          lastModified: new Date().toISOString().split('T')[0]
        }
        : plan
    ));
  };

  // Filter and sort plans
  const getFilteredAndSortedPlans = () => {
    let filtered = plans;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(plan =>
        plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.descriptions.some(desc =>
          desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply status filter
    if (filterStatus !== 'All') {
      filtered = filtered.filter(plan => plan.status === filterStatus);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (sortBy === 'price') {
        aValue = parseFloat(aValue);
        bValue = parseFloat(bValue);
      } else if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  };

  const filteredPlans = getFilteredAndSortedPlans();

  // Handle sort
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  return (
    <>
      <div className="">
        <div className="">
          {/* Header */}
          <div className="card-header bg-white mb-4">
            <div className="row align-items-center">
              <div className="col">
                <h1 className="h2 mb-1 text-dark fw-bold">Plans & Packages</h1>
                <p className="text-muted mb-0">Manage your subscription plans and pricing options</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="card-body">
            <div className="row g-3 align-items-center mb-4">
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text">
                    🔍
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search plans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <select
                  className="form-select"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="col-md-5 text-end">
                {/* <div className="btn-group me-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={exportData}
                    title="Export data to JSON file"
                  >
                    📤 Export
                  </button>
                  <label className="btn btn-outline-secondary btn-sm">
                    📥 Import
                    <input
                      type="file"
                      accept=".json"
                      onChange={importData}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={resetToDefaults}
                    title="Reset to default data"
                  >
                    🔄 Reset
                  </button>
                </div> */}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    resetForm();
                    setShowModal(true);
                  }}
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Add New Plan
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th
                    className="user-select-none cursor-pointer"
                    onClick={() => handleSort('name')}
                    style={{ cursor: 'pointer' }}
                  >
                    Plan Name {getSortIcon('name')}
                  </th>
                  <th
                    className="user-select-none cursor-pointer"
                    onClick={() => handleSort('price')}
                    style={{ cursor: 'pointer' }}
                  >
                    Price {getSortIcon('price')}
                  </th>
                  <th
                    className="user-select-none cursor-pointer"
                    onClick={() => handleSort('billingCycle')}
                    style={{ cursor: 'pointer' }}
                  >
                    Billing Cycle {getSortIcon('billingCycle')}
                  </th>
                  <th
                    className="user-select-none cursor-pointer"
                    onClick={() => handleSort('status')}
                    style={{ cursor: 'pointer' }}
                  >
                    Status {getSortIcon('status')}
                  </th>
                  <th>Descriptions</th>
                  <th
                    className="user-select-none cursor-pointer"
                    onClick={() => handleSort('subscribers')}
                    style={{ cursor: 'pointer' }}
                  >
                    Subscribers {getSortIcon('subscribers')}
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlans.map((plan) => (
                  <tr key={plan.id}>
                    <td>
                      <div>
                        <div className="fw-semibold text-dark">{plan.name}</div>
                        <small className="text-muted">ID: {plan.id}</small>
                      </div>
                    </td>
                    <td>
                      <div className="h5 mb-0 text-dark fw-bold">
                        ${plan.price.toFixed(2)}
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-secondary">
                        {plan.billingCycle}
                      </span>
                    </td>
                    <td>
                      <button
                        className={`btn btn-sm ${plan.status === 'Active'
                          ? 'btn-outline-success'
                          : 'btn-outline-danger'
                          }`}
                        onClick={() => toggleStatus(plan.id)}
                      >
                        {plan.status}
                      </button>
                    </td>
                    <td>
                      <ul className="list-unstyled mb-0">
                        {plan.descriptions.map((desc, idx) => (
                          <li key={idx} className="small text-muted">
                            <span className="text-primary me-1">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <div>
                        <div className="h5 mb-0 text-dark fw-bold">
                          {plan.subscribers.toLocaleString()}
                        </div>
                        <small className="text-muted">subscribers</small>
                      </div>
                    </td>
                    <td>
                      <div className="btn-group d-flex gap-2" role="group">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleEdit(plan)}
                        >
                          <i className="bi bi-pencil-square me-2"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(plan)}
                        >
                          <i className="bi bi-trash me-2"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Results Footer */}
          <div className="card-footer bg-light">
            <div className="row align-items-center">
              <div className="col">
                <small className="text-muted">
                  Showing {filteredPlans.length} of {plans.length} plans
                </small>
              </div>
              <div className="col-auto">
                <small className="text-muted">
                  Total subscribers: {plans.reduce((sum, plan) => sum + plan.subscribers, 0).toLocaleString()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Plan Modal */}
      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingPlan ? 'Edit Plan' : 'Add New Plan'}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                ></button>
              </div>

              <div className="modal-body">
                {/* Plan Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Plan Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Enter plan name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Price and Billing Cycle */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Price ($) <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        min="0"
                        step="0.01"
                        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                        placeholder="0.00"
                      />
                      {errors.price && (
                        <div className="invalid-feedback">{errors.price}</div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Billing Cycle
                      </label>
                      <select
                        name="billingCycle"
                        value={formData.billingCycle}
                        onChange={handleInputChange}
                        className="form-select"
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="One-time">One-time</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                {/* Descriptions */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Plan Features <span className="text-danger">*</span>
                  </label>
                  {formData.descriptions.map((desc, index) => (
                    <div key={index} className="input-group mb-2">
                      <input
                        type="text"
                        value={desc}
                        onChange={(e) => handleDescriptionChange(index, e.target.value)}
                        className="form-control"
                        placeholder={`Feature ${index + 1}`}
                      />
                      {formData.descriptions.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => removeDescriptionField(index)}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={addDescriptionField}
                  >
                    + Add Another Feature
                  </button>
                  {errors.descriptions && (
                    <div className="text-danger small mt-1">{errors.descriptions}</div>
                  )}
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  {editingPlan ? 'Update Plan' : 'Create Plan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <span className="me-2">⚠️</span>
                  Delete Plan
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setPlanToDelete(null);
                  }}
                ></button>
              </div>

              <div className="modal-body">
                <p className="mb-3">
                  Are you sure you want to delete the <strong>"{planToDelete?.name}"</strong> plan?
                </p>
                <div className="alert alert-warning">
                  <small>
                    <strong>Warning:</strong> This action cannot be undone and will affect{' '}
                    <strong>{planToDelete?.subscribers.toLocaleString()}</strong> subscribers.
                  </small>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setPlanToDelete(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                >
                  Delete Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlansPackages;