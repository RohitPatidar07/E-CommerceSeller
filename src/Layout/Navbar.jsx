import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Notification from "./Notification";

const Navbar = ({ toggleSidebar }) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.clear(); // Remove token
    navigate("/"); // Redirect to login
  };

  return (
    <nav className="navbar">
      {/* Sidebar Toggle + Logo */}
      <div className="navbar-left">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h3 className="h4 fw-bold">LOGO</h3>
        </Link>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* Search */}
      {/* <div className="navbar-search">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
        <button className="mobile-search">
          <FaSearch />
        </button>
      </div> */}

      {/* Notification and Profile */}
      <div className="navbar-right d-flex" ref={dropdownRef}>
        {/* <Notification /> */}
        <div
          className="profile-icon"
          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          style={{ cursor: "pointer", marginLeft: "15px" }}
        >
          <FaUserCircle size={30} className="text-white" />
        </div>

        {/* Profile Dropdown */}
        {profileDropdownOpen && (
          <div className="profile-dropdown">
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item text-dark" to="/profile">
              <FaUser className="dropdown-icon" />
              <span>Profile</span>
            </Link>

            <div className="dropdown-divider"></div>
            <button
              className="dropdown-item text-danger"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="dropdown-icon" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
