import React, { useState } from 'react';

const platformInputConfig = {
  Shopify: ['Store URL', 'API Key', 'Secret'],
  Amazon: ['Seller ID', 'Region'],
  Flipkart: ['Seller ID'],
  Meesho: ['Seller ID'],
  Myntra: ['Seller ID', 'Username', 'Password']
};

const ChannelIntegration = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [credentials, setCredentials] = useState({});
  const [platforms, setPlatforms] = useState([
    { name: 'Amazon', icon: 'fab fa-amazon', iconColor: 'text-warning', connected: false },
    { name: 'Meesho', icon: 'fas fa-store', iconColor: 'text-info', connected: false },
    { name: 'Flipkart', icon: 'fas fa-shopping-cart', iconColor: 'text-primary', connected: false },
    { name: 'Myntra', icon: 'fas fa-tshirt', iconColor: 'text-danger', connected: false },
    { name: 'Shopify', icon: 'fab fa-shopify', iconColor: 'text-info', connected: true }
  ]);

  const handleConnect = (platform) => {
    setSelectedPlatform(platform);
    setModalType('connect');
    const defaultCreds = {};
    (platformInputConfig[platform] || []).forEach(field => {
      defaultCreds[field] = '';
    });
    setCredentials(defaultCreds);
    setShowModal(true);
  };

  const handleDisconnect = (platform) => {
    setSelectedPlatform(platform);
    setModalType('disconnect');
    setShowModal(true);
  };

  const confirmAction = () => {
    setPlatforms(prev =>
      prev.map(p =>
        p.name === selectedPlatform ? { ...p, connected: modalType === 'connect' } : p
      )
    );
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedPlatform('');
    setCredentials({});
  };

  const areAllFieldsFilled = () => {
    const requiredFields = platformInputConfig[selectedPlatform] || [];
    return requiredFields.every(field => credentials[field]?.trim());
  };

  return (
    <div>
      {/* Platform Cards */}
      <div className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-2">Channel Integrations</h2>
        <p className="text-muted">Connect your sales channels to sync orders and inventory automatically.</p>
      </div>

      <div className="row g-4 mb-5">
        {platforms.map((platform) => (
          <div className="col-md-6 col-lg-4" key={platform.name}>
            <div className="border rounded shadow-sm p-4 bg-white">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <i className={`${platform.icon} ${platform.iconColor} fs-4 me-2`}></i>
                  <h5 className="mb-0">{platform.name}</h5>
                </div>
                <span className={`badge rounded-pill ${platform.connected ? 'bg-success text-light' : 'bg-secondary'}`}>
                  {platform.connected ? 'Connected' : 'Not Connected'}
                </span>
              </div>
              <p className="text-muted small">
                {platform.connected
                  ? 'Syncing orders and inventory automatically'
                  : 'Connect to start syncing your store data'}
              </p>
              <button
                className={`btn w-100 ${platform.connected ? 'btn-outline-danger' : 'btn-primary'}`}
                onClick={() =>
                  platform.connected
                    ? handleDisconnect(platform.name)
                    : handleConnect(platform.name)
                }
              >
                {platform.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-1050">
          <div className="bg-white rounded p-4" style={{ width: '100%', maxWidth: '500px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">
                {modalType === 'connect' ? 'Connect Platform' : 'Disconnect Platform'}
              </h5>
              <button className="btn btn-sm btn-light" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <i className={`${platforms.find(p => p.name === selectedPlatform)?.icon} ${platforms.find(p => p.name === selectedPlatform)?.iconColor} fs-4 me-2`}></i>
                <strong>{selectedPlatform}</strong>
              </div>
              <p className="text-muted small">
                {modalType === 'connect'
                  ? `Enter credentials to connect ${selectedPlatform}.`
                  : `Are you sure you want to disconnect ${selectedPlatform}?`}
              </p>

              {/* Dynamic Inputs */}
              {modalType === 'connect' &&
                (platformInputConfig[selectedPlatform] || []).map((field, index) => (
                  <div className="mb-2" key={index}>
                    <label className="form-label text-muted small">{field}</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Enter ${field}`}
                      value={credentials[field]}
                      onChange={(e) =>
                        setCredentials({ ...credentials, [field]: e.target.value })
                      }
                    />
                  </div>
                ))}
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-outline-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button
                className={`btn ${modalType === 'connect' ? 'btn-primary' : 'btn-danger'}`}
                onClick={confirmAction}
                disabled={modalType === 'connect' && !areAllFieldsFilled()}
              >
                {modalType === 'connect' ? 'Connect' : 'Disconnect'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelIntegration;
