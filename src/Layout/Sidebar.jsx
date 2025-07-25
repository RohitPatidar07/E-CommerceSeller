import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  // ✅ Menu items for superadmin
  const superAdminMenuItems = [
    { name: "Dashboard", path: "/superadmin/dashboard", icon: faTachometerAlt },
    { name: "Users Management", path: "/superadmin/usersmanagement", icon: faUsersCog },
    { name: "Plan Master Control", path: "/superadmin/planmaster", icon: faSlidersH },
    { name: "Platform Billing", path: "/superadmin/platformbilling", icon: faMoneyCheckAlt },
    { name: "API Logs", path: "/superadmin/apilogs", icon: faServer },
    { name: "Branding CMS", path: "/superadmin/brandingcms", icon: faPaintBrush },
    { name: "Activity Logs", path: "/superadmin/activitylogs", icon: faHistory },
    { name: "System Settings", path: "/superadmin/systemsettings", icon: faCogs },
  ];

  // ✅ Dummy menu for admin (customize as needed)
  const adminMenuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: faTachometerAlt },
    { name: "Users", path: "/admin/users", icon: faUsersCog },
  ];

  // ✅ Dummy menu for user (customize as needed)
  const userMenuItems = [
    { name: "Dashboard", path: "/user/dashboard", icon: faTachometerAlt },
  ];

  const getMenuItems = () => {
    switch (role?.toLowerCase()) {
      case "superadmin":
        return superAdminMenuItems;
      case "admin":
        return adminMenuItems;
      case "user":
        return userMenuItems;
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  const isActive = (path) => location.pathname === path;

  const handleMenuItemClick = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  };

  return (
    <div className={`sidebar-container shadow-sm ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${isActive(item.path) ? "active" : ""}`}
              data-tooltip={collapsed ? item.name : ""}
            >
              <div
                className="menu-link"
                onClick={() => handleMenuItemClick(item.path)}
              >
                <FontAwesomeIcon icon={item.icon} className="menu-icon" />
                {!collapsed && <span className="menu-text">{item.name}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
