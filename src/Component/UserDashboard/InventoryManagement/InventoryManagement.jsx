// Converted React code using Bootstrap instead of Tailwind
// Includes React Icons and uses Bootstrap components and utility classes

import React, { useState } from 'react';
import { FaEdit, FaTrash, FaSync, FaPlus, FaUpload, FaTimes, FaSearch, FaFilter, FaSort, FaExclamationTriangle, FaAmazon, FaStore } from 'react-icons/fa';
import { SiEbay, SiShopify, SiEtsy, SiWalmart } from 'react-icons/si';

const getStoreIcon = (store) => {
  switch (store) {
    case 'Amazon': return <FaAmazon className="me-2" />;
    case 'eBay': return <SiEbay className="me-2" />;
    case 'Shopify': return <SiShopify className="me-2" />;
    case 'Walmart': return <SiWalmart className="me-2" />;
    case 'Etsy': return <SiEtsy className="me-2" />;
    default: return <FaStore className="me-2" />;
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Active': return 'badge bg-success';
    case 'Low Stock': return 'badge bg-warning text-dark';
    case 'Out of Stock': return 'badge bg-danger';
    default: return 'badge bg-secondary';
  }
};

const InventoryManagement = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editMode, setEditMode] = useState('edit');

  const products = [
    { sku: 'SKU-001', name: 'Wireless Bluetooth Headphones', quantity: 45, linkedStores: ['Amazon', 'eBay', 'Shopify'], status: 'Active' },
    { sku: 'SKU-002', name: 'Smart Fitness Tracker', quantity: 23, linkedStores: ['Amazon', 'Walmart'], status: 'Low Stock' },
    { sku: 'SKU-003', name: 'Portable Phone Charger', quantity: 78, linkedStores: ['eBay', 'Shopify', 'Etsy'], status: 'Active' },
    { sku: 'SKU-004', name: 'LED Desk Lamp', quantity: 12, linkedStores: ['Amazon'], status: 'Low Stock' },
    { sku: 'SKU-005', name: 'Wireless Mouse', quantity: 0, linkedStores: ['Shopify'], status: 'Out of Stock' },
    { sku: 'SKU-006', name: 'USB-C Hub Adapter', quantity: 34, linkedStores: ['Amazon', 'eBay'], status: 'Active' },
  ];

  const handleEdit = (sku) => {
    setSelectedProduct(sku);
    setEditMode('edit');
    setShowEditModal(true);
  };

  const handleSync = (sku) => {
    setSelectedProduct(sku);
    setShowSyncModal(true);
  };

  const handleDelete = (sku) => {
    setSelectedProduct(sku);
    setShowDeleteModal(true);
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Inventory Management</h2>
          <p className="text-muted">Manage your products and sync across all channels</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <FaUpload className="me-2" /> Import CSV
          </button>
          <button className="btn btn-primary" onClick={() => { setEditMode('add'); setShowAddModal(true); }}>
            <FaPlus className="me-2" /> Add Product
          </button>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body d-flex align-items-center gap-3">
          <div className="flex-grow-1 position-relative">
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-outline-secondary">
            <FaFilter className="me-2" /> Filter
          </button>
          <button className="btn btn-success">
            <FaSync className="me-2" /> Sync All
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>SKU <FaSort className="ms-1 text-muted" /></th>
              <th>Product Name <FaSort className="ms-1 text-muted" /></th>
              <th>Quantity <FaSort className="ms-1 text-muted" /></th>
              <th>Linked Stores</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td className={
                  product.quantity === 0
                    ? 'text-danger'
                    : product.quantity < 20
                    ? 'text-warning'
                    : 'text-success'
                }>
                  {product.quantity}
                </td>
                <td>
                  <div className="d-flex flex-wrap gap-1">
                    {product.linkedStores.map(store => (
                      <span key={store} className="badge bg-light text-dark d-flex align-items-center">
                        {getStoreIcon(store)} {store}
                      </span>
                    ))}
                  </div>
                </td>
                <td><span className={getStatusClass(product.status)}>{product.status}</span></td>
                <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary" title="Edit" onClick={() => handleEdit(product.sku)}><FaEdit /></button>
                    <button className="btn btn-sm btn-outline-success" title="Sync" onClick={() => handleSync(product.sku)}><FaSync /></button>
                    <button className="btn btn-sm btn-outline-danger" title="Delete" onClick={() => handleDelete(product.sku)}><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <span>Showing 1 to 6 of 6 results</span>
        <div className="btn-group">
          <button className="btn btn-outline-secondary">Previous</button>
          <button className="btn btn-primary">1</button>
          <button className="btn btn-outline-secondary">Next</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
