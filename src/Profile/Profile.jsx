import React, { useState } from 'react';

const Profile = () => {
  // Sample user data - in a real app, this would come from an API or context
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, New York, NY 10001'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
    alert('Profile updated!');
  };

  const handleEditClick = () => {
    setFormData({ ...userData });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User Profile</h2>
      
      {/* Profile Info Display */}
      {!isEditing ? (
        <div className="card mb-5">
          <div className="card-body">
            <h4 className="card-title mb-4">Personal Information</h4>
            
            <div className="mb-3">
              <h6 className="text-muted">Name</h6>
              <p className="fs-5">{userData.name}</p>
            </div>
            
            <div className="mb-3">
              <h6 className="text-muted">Email</h6>
              <p className="fs-5">{userData.email}</p>
            </div>
            
            <div className="mb-4">
              <h6 className="text-muted">Address</h6>
              <p className="fs-5">{userData.address}</p>
            </div>
            
            <button 
              onClick={handleEditClick} 
              className="btn btn-primary"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        /* Edit Profile Form */
        <form onSubmit={handleProfileUpdate} className="card mb-5">
          <div className="card-body">
            <h4 className="card-title mb-4">Edit Profile</h4>
            
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button 
                type="button" 
                onClick={handleCancelEdit}
                className="btn btn-outline-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Password Update Section */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">Change Password</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter current password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm new password"
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;