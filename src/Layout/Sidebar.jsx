import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faClipboardList,
  faServer,
  faCreditCard,
  faCog,
  faUser,
  faBoxOpen,
  faHistory,
  faUsers,
  faChartBar,
  faHandshake, 
  faBoxes, 
  faTachometerAlt,
  faUsersCog,
  faSatelliteDish, 
  faChartLine, 
  faTruckFast,  
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [role, setRole] = useState("user");

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole);
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) setCollapsed(true);
  };

  // --- Admin Menus ---
  const adminMenus = [
    { name: "Dashboard", icon: faTachometerAlt, path: "/admin/dashboard" },
  { name: "Orders Management", icon: faClipboardList, path: "/admin/ordermanagements" },
  { name: "Channel Integration", icon: faSatelliteDish, path: "/admin/channelintegration" },
  { name: "Reports", icon: faChartLine, path: "/admin/reportdashboard" },
  { name: "Delivery Partner", icon: faTruckFast, path: "/admin/deliverypartner" },
  { name: "Setting", icon: faSlidersH, path: "/admin/setting" },
    
    // { name: "Inventory Managements", icon: faServer, path: "/admin/inventorymanagements" },
    // { name: "Plan Billing", icon: faServer, path: "/admin/plansbilling" },
    // { name: "Shipping Setting", icon: faCog, path: "/admin/shippingsetting" },
    // { name: "User Management", icon: faUserCog, path: "/admin/usermanagements" },
    // { name: "System Alerts ", icon: faCreditCard, path: "/admin/systemalerts" },
  ];

  // --- Super Admin Menus ---
  const superAdminMenus = [
    { name: "Dashboard", icon: faTachometerAlt, path: "/superadmin/dashboard" },
    { name: "Plan Packages", icon: faUsers, path: "/superadmin/planpackages" },
    { name: "Plan Request", icon: faUser, path: "/superadmin/planrequest" },
    { name: "User Management", icon: faChartBar, path: "/superadmin/usermanagement" },
    { name: "Payment", icon: faCog, path: "/superadmin/payment" },
    { name: "Setting", icon: faCreditCard, path: "/superadmin/setting" },

  ];

  // --- User Menus ---
  const userMenus = [
    { name: "Dashboard", icon: faTachometerAlt, path: "/user/dashboard" },
    { name: "Shipping Setting", icon: faBoxOpen, path: "/user/shippingsetting" },
    { name: "Channel Integrations", icon: faHistory, path: "/user/channelintergration" },
    { name: "Order Management", icon: faUser, path: "/user/ordermanagement" },
    { name: "Inventory Management", icon: faCog, path: "/user/inventorymanagement" },
    { name: "Report", icon: faCog, path: "/user/reports" },
    { name: "Shipping Setting", icon: faCog, path: "/user/shippingsetting" },
    { name: "Billing And Plans ", icon: faCog, path: "/user/setting" },
    { name: "Srtting", icon: faCreditCard, path: "/user/setting" },
  ];

  // Choose menu list based on role
  const menus =
    role === "admin"
      ? adminMenus
      : role === "superadmin"
        ? superAdminMenus
        : userMenus;

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {menus.map((menu, index) => (
            <li key={index} className="menu-item">
              <div
                className={`menu-link ${isActive(menu.path) ? "active" : ""}`}
                onClick={() => handleNavigate(menu.path)}
              >
                <FontAwesomeIcon icon={menu.icon} className="menu-icon" />
                {!collapsed && <span className="menu-text">{menu.name}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
