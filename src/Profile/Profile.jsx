import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { useParams } from "react-router-dom";

const Profile = () => {
  // Sample user data - in a real app, this would come from an API or context
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Replace with dynamic value if available (e.g., from auth context or localStorage)
  const id = localStorage.getItem("userId");
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}getById/${id}`);
      console.log("Fetched user data:", response.data);
      setUserData(response.data);
      setId(""); // Update id state with fetched user id
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [formData, setFormData] = useState({ ...userData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setFormData({ ...userData });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    try {
      const response = await axios.put(`${BASE_URL}change-password/${id}`, {
        currentPassword,
        newPassword,
        confirmPassword,
      });

      setMessage("Password updated successfully");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to update password");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://2lkmvcf8-5000.inc1.devtunnels.ms/profile-edit/${id}`,
        {
          name: formData.name,
          email: formData.email,
        }
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
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

            <button onClick={handleEditClick} className="btn btn-primary">
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

          {message && <div className="alert alert-info">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter current password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm new password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
