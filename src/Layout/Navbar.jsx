import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import "./Navbar.css"
import { Link } from "react-router-dom";
import Notification from "./Notification";

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
           <h3 className="h4 fw-bold">LOGO</h3>
        {/* <img src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png" alt="Logo" className="navbar-logo" /> */}
    
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
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
      <div className="navbar-right ">
        <Notification />
      </div>
    </nav>
  );
};

export default Navbar;