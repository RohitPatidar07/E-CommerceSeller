import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import "./Navbar.css"

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* Sidebar Toggle + Logo */}
      <div className="navbar-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <img src="" alt="Logo" className="navbar-logo" />
      </div>

      {/* Search */}
      <div className="navbar-search">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
          <span className="search-icon"><FaSearch /></span>
        </div>
        <button className="mobile-search">
          <FaSearch />
        </button>
      </div>

      {/* Notification and User */}
      <div className="navbar-right">
        <div className="notification">
          <FaBell className="notification-icon" />
          <span className="notification-badge">3</span>
        </div>

        <div className="user-dropdown" ref={dropdownRef}>
          <div
            className="user-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUserCircle className="user-icon" />
            <div className="user-info">
              <small>Welcome</small>
              <div>Admin</div>
            </div>
          </div>

          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;