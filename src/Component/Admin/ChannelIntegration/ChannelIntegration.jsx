import React, { useState } from 'react';

const ChannelIntegration = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [platforms, setPlatforms] = useState([
    { name: 'Shopify', icon: 'fab fa-shopify', iconColor: 'text-success', connected: true },
    { name: 'Amazon', icon: 'fab fa-amazon', iconColor: 'text-warning', connected: false },
    { name: 'eBay', icon: 'fab fa-ebay', iconColor: 'text-primary', connected: false },
    { name: 'Etsy', icon: 'fab fa-etsy', iconColor: 'text-danger', connected: false },
    { name: 'WooCommerce', icon: 'fab fa-wordpress', iconColor: 'text-info', connected: true },
    { name: 'Magento', icon: 'fas fa-shopping-bag', iconColor: 'text-danger', connected: false }
  ]);

  const handleConnect = (platform) => {
    setSelectedPlatform(platform);
    setModalType('connect');
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
  };

  return (
    <div className="container-fluid bg-light py-4">
      <div className="container">
        <div className="mb-4">
          <h2 className="fw-bold mb-2">Channel Integrations</h2>
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
                  {platform.connected ? 'Syncing orders and inventory automatically' : 'Connect to start syncing your store data'}
                </p>
                <button
                  className={`btn w-100 ${platform.connected ? 'btn-outline-danger' : 'btn-primary'}`}
                  onClick={() => platform.connected ? handleDisconnect(platform.name) : handleConnect(platform.name)}
                >
                  {platform.connected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border rounded shadow-sm p-4 mb-5">
          <h4 className="mb-3">Integration Status</h4>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr className="text-muted small">
                  <th>Platform</th>
                  <th>Status</th>
                  <th>Last Sync</th>
                  <th>Orders</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform) => (
                  <tr key={platform.name}>
                    <td>
                      <div className="d-flex align-items-center">
                        <i className={`${platform.icon} ${platform.iconColor} me-2`}></i>
                        {platform.name}
                      </div>
                    </td>
                    <td>
                      <span className={`badge rounded-pill ${platform.connected ? 'bg-success text-light' : 'bg-secondary'}`}>
                        {platform.connected ? 'Connected' : 'Not Connected'}
                      </span>
                    </td>
                    <td className="text-muted small">{platform.connected ? '5 minutes ago' : 'Never'}</td>
                    <td className="text-muted small">{platform.connected ? Math.floor(Math.random() * 100 + 50) : 0}</td>
                    <td>
                      <button
                        className={`btn btn-sm ${platform.connected ? 'btn-outline-danger' : 'btn-outline-primary'}`}
                        onClick={() => platform.connected ? handleDisconnect(platform.name) : handleConnect(platform.name)}
                      >
                        {platform.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-info bg-opacity-10 border-start border-info p-4 rounded">
          <h5 className="text-info">How to Connect</h5>
          <ul className="text-info small mb-0">
            <li>Click "Connect" next to any platform to start the integration process</li>
            <li>You'll be redirected to the platform's OAuth authorization page</li>
            <li>Grant the necessary permissions for order and inventory sync</li>
            <li>Your store data will automatically sync every 5 minutes</li>
          </ul>
        </div>
      </div>

      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-1050">
          <div className="bg-white rounded p-4" style={{ width: '100%', maxWidth: '500px' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">{modalType === 'connect' ? 'Connect Platform' : 'Disconnect Platform'}</h5>
              <button className="btn btn-sm btn-light" onClick={closeModal}><i className="fas fa-times"></i></button>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <i className={`${platforms.find(p => p.name === selectedPlatform)?.icon} ${platforms.find(p => p.name === selectedPlatform)?.iconColor} fs-4 me-2`}></i>
                <strong>{selectedPlatform}</strong>
              </div>
              <p className="text-muted small">
                {modalType === 'connect'
                  ? `Are you sure you want to connect ${selectedPlatform}? This will enable automatic data synchronization.`
                  : `Are you sure you want to disconnect ${selectedPlatform}? This will stop all data synchronization.`}
              </p>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-outline-secondary" onClick={closeModal}>Cancel</button>
              <button
                className={`btn ${modalType === 'connect' ? 'btn-primary' : 'btn-danger'}`}
                onClick={confirmAction}
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
