import React, { useState } from 'react';
import { FaImage, FaUpload } from 'react-icons/fa';

const Setting = () => {
  const [businessName, setBusinessName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [logoPreview, setLogoPreview] = useState(null);

  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileSave = () => {
    console.log('Profile saved');
  };

  const handleAccountSave = () => {
    console.log('Account settings saved');
  };

  return (
    <div className="">
      <div className="mb-4">
        <h1 className="h3 fw-bold text-dark mb-2">Settings</h1>
        <p className="text-muted">Manage your business profile and account settings</p>
      </div>

      {/* Business Info Card */}
      <div className="bg-white p-4 rounded shadow-sm border mb-5">
        <h2 className="h5 fw-semibold text-dark mb-4">Business Information</h2>
        <div className="mb-3">
          <label className="form-label">Business Name</label>
          <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="form-control" placeholder="Enter your business name" />
        </div>
        <div className="mb-3">
          <label className="form-label">GST Number</label>
          <input type="text" value={gstNumber} onChange={(e) => setGstNumber(e.target.value)} className="form-control" placeholder="Enter your GST number" />
        </div>

        {/* Logo Upload */}
        <div className="mb-3">
          <label className="form-label">Business Logo</label>
          <div className="d-flex align-items-start gap-3">
            <div className="border border-2 border-secondary-subtle rounded d-flex align-items-center justify-content-center bg-light" style={{ width: '96px', height: '96px' }}>
              {logoPreview ? (
                <img src={logoPreview} alt="Logo preview" className="img-fluid w-100 h-100 object-fit-cover" />
              ) : (
                <FaImage className="text-secondary fs-2" />
              )}
            </div>
            <div className="flex-grow-1">
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="d-none" id="logo-upload" />
              <label htmlFor="logo-upload" className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center">
                <FaUpload className="me-2" /> Upload Logo
              </label>
              <p className="form-text mt-2">Recommended size: 200x200px. Max file size: 2MB</p>
            </div>
          </div>
        </div>

        <div className="mt-4 border-top pt-3">
          <button onClick={handleProfileSave} className="btn btn-primary px-4">Save Profile</button>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white p-4 rounded shadow-sm border">
        <h2 className="h5 fw-semibold text-dark mb-4">Account Settings</h2>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email address" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" placeholder="Enter your mobile number" />
          </div>
        </div>

        <div className="border-top pt-4">
          <h3 className="h6 fw-medium mb-3">Change Password</h3>

          <div className="mb-3">
            <label className="form-label">Current Password</label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="form-control" placeholder="Enter current password" />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" placeholder="Enter new password" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Confirm New Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm new password" />
            </div>
          </div>
        </div>

        <div className="mt-4 border-top pt-3">
          <button onClick={handleAccountSave} className="btn btn-primary px-4">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
