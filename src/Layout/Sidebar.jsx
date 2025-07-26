import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faTachometerAlt,
  faUserCog,
  faClipboardList,
  faServer,
  faCreditCard,
  faCog,
  faUser,
  faBoxOpen,
  faHistory,
  faUsers,
  faChartBar,
  faCogs,
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
    { name: "Admin Management", icon: faUserCog, path: "/admin/usermanagement" },
    { name: "Plan Packages", icon: faClipboardList, path: "/admin/planpackages" },
    { name: "Plan Request", icon: faServer, path: "/admin/planrequest" },
    { name: "Payment", icon: faCreditCard, path: "/admin/payment" },
    { name: "Setting", icon: faCog, path: "/admin/setting" },
  ];

  // --- Super Admin Menus ---
  const superAdminMenus = [
    { name: "Dashboard", icon: faTachometerAlt, path: "/superadmin/dashboard" },
    { name: "All Users", icon: faUsers, path: "/superadmin/users" },
    { name: "All Admins", icon: faUserCog, path: "/superadmin/admins" },
    { name: "Reports", icon: faChartBar, path: "/superadmin/reports" },
    { name: "System Settings", icon: faCogs, path: "/superadmin/system-settings" },
    { name: "Transactions", icon: faCreditCard, path: "/superadmin/transactions" },
  ];

  // --- User Menus ---
  const userMenus = [
    { name: "Dashboard", icon: faTachometerAlt, path: "/user/dashboard" },
    { name: "My Orders", icon: faBoxOpen, path: "/user/orders" },
    { name: "Payment History", icon: faHistory, path: "/user/payment-history" },
    { name: "Profile", icon: faUser, path: "/user/profile" },
    { name: "Setting", icon: faCog, path: "/user/setting" },
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
