import React, { useState } from 'react';

const DeliveryPartner = () => {
  const [deliveryPartner, setDeliveryPartner] = useState('');
  const [trackingId, setTrackingId] = useState('');
  const [webhookEnabled, setWebhookEnabled] = useState(false);

  const deliveryPartners = ['Delhivery', 'Bluedart', 'Ecom Express', 'DTDC', 'India Post'];

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      deliveryPartner,
      trackingId,
      webhookEnabled,
    };
    console.log('Delivery Assigned:', payload);
    // Add API call here to save delivery info
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Step 4: Assign Deliveries</h2>
      <form onSubmit={handleSubmit}>
        {/* Delivery Partner Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Partner</label>
          <select
            value={deliveryPartner}
            onChange={(e) => setDeliveryPartner(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Partner</option>
            {deliveryPartners.map((partner) => (
              <option key={partner} value={partner}>{partner}</option>
            ))}
          </select>
        </div>

        {/* Tracking ID Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Tracking ID</label>
          <input
            type="text"
            placeholder="Enter or auto-sync tracking ID"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Webhook Toggle */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            checked={webhookEnabled}
            onChange={(e) => setWebhookEnabled(e.target.checked)}
            id="webhook"
            className="mr-2"
          />
          <label htmlFor="webhook" className="text-sm text-gray-700">
            Enable auto status updates via webhook (optional)
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Assign Delivery
        </button>
      </form>
    </div>
  );
};

export default DeliveryPartner;
