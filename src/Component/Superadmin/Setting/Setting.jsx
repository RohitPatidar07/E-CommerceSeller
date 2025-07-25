import React, { useState, useEffect } from 'react';

const Settings = () => {
    // Load settings from localStorage or use defaults
    const loadSettings = () => {
        try {
            const savedSettings = localStorage.getItem('systemSettings');
            return savedSettings
                ? JSON.parse(savedSettings)
                : {
                    featuresEnabled: true,
                    maintenanceMode: false,
                    apiLimitEnabled: true,
                    maxApiRequests: 1000
                };
        } catch (error) {
            console.error('Error loading settings:', error);
            return {
                featuresEnabled: true,
                maintenanceMode: false,
                apiLimitEnabled: true,
                maxApiRequests: 1000
            };
        }
    };

    const [settings, setSettings] = useState(loadSettings());
    const [showSavedAlert, setShowSavedAlert] = useState(false);

    // Save settings to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('systemSettings', JSON.stringify(settings));
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    }, [settings]);

    const ToggleSwitch = ({ enabled, onChange, id }) => (
        <div className="form-check form-switch d-flex align-items-center">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={id}
                checked={enabled}
                onChange={() => onChange(!enabled)}
                style={{ width: '2.5em', height: '1.5em', cursor: 'pointer' }}
            />
        </div>
    );

    const handleSave = () => {
        // In a real app, you would send this to your backend API
        console.log('Settings saved:', settings);
        setShowSavedAlert(true);

        // Hide the alert after 3 seconds
        setTimeout(() => setShowSavedAlert(false), 3000);
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        setSettings({
            ...settings,
            maxApiRequests: Math.min(Math.max(value, 1), 10000) // Ensure value is between 1-10000
        });
    };

    return (
        <div className="">
            <div className="">
                {/* Saved Alert */}
                {showSavedAlert && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <i className="fas fa-check-circle me-2"></i>
                        Settings saved successfully!
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowSavedAlert(false)}
                            aria-label="Close"
                        ></button>
                    </div>
                )}

                {/* Header Section */}
                <div className="mb-4">
                    <h1 className="h2 mb-1 mb-md-2">System Settings</h1>
                    <p className="text-muted">Configure system-wide settings and preferences for your application.</p>
                </div>

                {/* Settings Cards */}
                <div className="row g-4">
                    {/* Enable/Disable Features Card */}
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title mb-2">Enable/Disable Features</h5>
                                        <p className="card-text text-muted small">
                                            Toggle to enable or disable advanced features across the platform.
                                        </p>
                                    </div>
                                    <ToggleSwitch
                                        id="featuresToggle"
                                        enabled={settings.featuresEnabled}
                                        onChange={(enabled) => setSettings({ ...settings, featuresEnabled: enabled })}
                                    />
                                </div>
                                <div className="mt-3 d-flex align-items-center">
                                    <div className={`rounded-circle me-2 ${settings.featuresEnabled ? 'bg-success' : 'bg-secondary'}`}
                                        style={{ width: '8px', height: '8px' }}></div>
                                    <span className={`small fw-medium ${settings.featuresEnabled ? 'text-success' : 'text-muted'}`}>
                                        {settings.featuresEnabled ? 'Features Enabled' : 'Features Disabled'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Mode Card */}
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title mb-2">Maintenance Mode</h5>
                                        <p className="card-text text-muted small">
                                            Enable maintenance mode to temporarily disable user access.
                                        </p>
                                    </div>
                                    <ToggleSwitch
                                        id="maintenanceToggle"
                                        enabled={settings.maintenanceMode}
                                        onChange={(enabled) => setSettings({ ...settings, maintenanceMode: enabled })}
                                    />
                                </div>
                                <div className="mt-3 d-flex align-items-center">
                                    <div className={`rounded-circle me-2 ${settings.maintenanceMode ? 'bg-warning' : 'bg-success'}`}
                                        style={{ width: '8px', height: '8px' }}></div>
                                    <span className={`small fw-medium ${settings.maintenanceMode ? 'text-warning' : 'text-success'}`}>
                                        {settings.maintenanceMode ? 'System Under Maintenance' : 'System Online'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Max API Requests/User Card */}
                    <div className="col-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="flex-grow-1">
                                        <h5 className="card-title mb-2">Max API Requests/User</h5>
                                        <p className="card-text text-muted small">
                                            Set the maximum number of API requests per user per hour.
                                        </p>
                                    </div>
                                    <ToggleSwitch
                                        id="apiLimitToggle"
                                        enabled={settings.apiLimitEnabled}
                                        onChange={(enabled) => setSettings({ ...settings, apiLimitEnabled: enabled })}
                                    />
                                </div>

                                {settings.apiLimitEnabled && (
                                    <div className="mt-3 border-top pt-3">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <label htmlFor="maxRequests" className="form-label small fw-medium me-2 mb-2 mb-md-0">
                                                Request Limit:
                                            </label>
                                            <div className="d-flex align-items-center">
                                                <input
                                                    type="number"
                                                    id="maxRequests"
                                                    value={settings.maxApiRequests}
                                                    onChange={handleInputChange}
                                                    className="form-control form-control-sm me-2"
                                                    style={{ width: '80px' }}
                                                    min="1"
                                                    max="10000"
                                                />
                                                <span className="small text-muted">requests/hour</span>
                                            </div>
                                        </div>
                                        <p className="small text-muted mt-2 mb-0">
                                            Recommended: 1000-5000 requests per hour
                                        </p>
                                    </div>
                                )}

                                <div className="mt-3 d-flex align-items-center">
                                    <div className={`rounded-circle me-2 ${settings.apiLimitEnabled ? 'bg-primary' : 'bg-secondary'}`}
                                        style={{ width: '8px', height: '8px' }}></div>
                                    <span className={`small fw-medium ${settings.apiLimitEnabled ? 'text-primary' : 'text-muted'}`}>
                                        {settings.apiLimitEnabled ? `Rate Limiting Active (${settings.maxApiRequests}/hour)` : 'Rate Limiting Disabled'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Save Changes Button */}
                <div className="mt-4 d-flex justify-content-end">
                    <button
                        className="btn btn-primary"
                        onClick={handleSave}
                    >
                        <i className="fas fa-save me-2"></i>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;