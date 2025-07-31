import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    gstId: "",
    companyLogo: "",
    previewLogo: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({ ...userData });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const id = localStorage.getItem("userId");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}getById/${id}`);
      setUserData({
        ...response.data,
        previewLogo: response.data.companyLogo
          ? `${BASE_URL}${response.data.companyLogo}`
          : "",
      });
      setFormData({
        ...response.data,
        previewLogo: response.data.companyLogo
          ? `${BASE_URL}${response.data.companyLogo}`
          : "",
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [name]: file,
        [`preview${name.charAt(0).toUpperCase() + name.slice(1)}`]:
          URL.createObjectURL(file),
      }));
    }
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
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to update password");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("gstId", formData.gstId);

      if (formData.companyLogo && typeof formData.companyLogo !== "string") {
        formDataToSend.append("companyLogo", formData.companyLogo);
      }

      const response = await axios.put(
        `${BASE_URL}profile-edit/${id}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Profile updated successfully!");
      setIsEditing(false);
      fetchUserData();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User Profile</h2>

      {/* Profile View */}
      {!isEditing ? (
        <div className="card mb-5">
          <div className="card-body">
            <h4 className="card-title mb-4">Personal Information</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <h6 className="text-muted">Name</h6>
                  <p className="fs-5">{userData.name || "N/A"}</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted">Email</h6>
                  <p className="fs-5">{userData.email || "N/A"}</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted">Address</h6>
                  <p className="fs-5">{userData.address || "road 4 Amirpet "}</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted">GST ID</h6>
                  <p className="fs-5">{userData.gstId || "ABC122580"}</p>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column gap-4">
                <div className="mb-3">
                  <h6 className="text-muted">Company Logo</h6>
                  <img
                    src={
                      userData.previewLogo ||
                      "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
                    }
                    alt="Company Logo"
                    className="img-thumbnail"
                    style={{ maxWidth: "100px", maxHeight: "100px", borderRadius: "50%" }}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleEditClick} className="btn btn-primary">
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleProfileUpdate} className="card mb-5">
          <div className="card-body">
            <h4 className="card-title mb-4">Edit Profile</h4>
            <div className="row">
              <div className="col-md-6">
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
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">GST ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gstId"
                    value={formData.gstId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column gap-4">
                <div className="mb-3">
                  <label className="form-label">Company Logo</label>
                  <input
                    type="file"
                    className="form-control"
                    name="companyLogo"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <img
                    src={
                      formData.previewLogo ||
                      "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png"
                    }
                    alt="Logo Preview"
                    className="img-thumbnail mt-2"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </div>
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

      {/* Change Password */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">Change Password</h4>
          {message && (
            <div
              className={`alert ${
                message.includes("successfully")
                  ? "alert-success"
                  : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3 position-relative">
              <label className="form-label">Current Password</label>
              <input
                type={showCurrent ? "text" : "password"}
                className="form-control pe-5"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer", marginTop: "13px" }}
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {!showCurrent ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label">New Password</label>
              <input
                type={showNew ? "text" : "password"}
                className="form-control pe-5"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer", marginTop: "13px" }}
                onClick={() => setShowNew(!showNew)}
              >
                {!showNew ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label">Confirm New Password</label>
              <input
                type={showConfirm ? "text" : "password"}
                className="form-control pe-5"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: "pointer", marginTop: "13px" }}
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {!showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
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
