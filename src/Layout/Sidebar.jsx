import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faGear,
  faChartBar,
  faUsers,
  faFileAlt,
  faUserGear,
  faChartLine,
  faCalculator,
  faAddressBook,
  faCircleDot,
  faTachometerAlt,
  faUserCog,
  faClipboardList,
  faBox,
  faCreditCard,
  faServer,
  faBrush,
  faHistory,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const isActive = (path) => location.pathname === path;

  const handleNavigate = (path) => {
    navigate(path);
    if (window.innerWidth <= 768) setCollapsed(true);
  };

  const menus = [
    {
      name: "Dashboard",
      icon: faTachometerAlt,
      key: "dashboard",
      path: "/dashboard"
    },
    {
      name: "Users Management",
      icon: faUserCog,
      key: "users",
      path: "/usermanagement"
    },
    {
      name: "Plan Management",
      icon: faBox,
      key: "plan",
      path: "/planmanagement"
    },
      {
      name: "Plan Packages",
      icon: faClipboardList,
      key: "plan",
      path: "/planbilling"
    },
    // {
    //   name: "Order MAnagement",
    //   icon: faBox,
    //   key: "billing",
    //   path: "/ordermanagement"
    // },
    // {
    //   name: "Api Logs",
    //   icon: faServer,
    //   key: "api",
    //   path: "/api"
    // },
    // {
    //   name: "Branding CMS",
    //   icon: faBrush,
    //   key: "branding",
    //   path: "/brandingcms"
    // },
    // {
    //   name: "Activity Logs",
    //   icon: faHistory,
    //   key: "activity",
    //   path: "/activitylogs"
    // },
    {
      name: "Setting",
      icon: faCog,
      key: "system",
      path: "/setting"
    },
  ];

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {menus.map((menu, index) => (
            <li key={index} className="menu-item">
              {menu.path ? (
                // Single menu item (no submenu)
                <div
                  className={`menu-link ${isActive(menu.path) ? "active" : ""}`}
                  onClick={() => handleNavigate(menu.path)}
                >
                  <FontAwesomeIcon icon={menu.icon} className="menu-icon" />
                  {!collapsed && <span className="menu-text">{menu.name}</span>}
                </div>
              ) : (
                // Menu with subitems
                <>
                  <div
                    className="menu-link"
                    onClick={() => toggleMenu(menu.key)}
                  >
                    <FontAwesomeIcon icon={menu.icon} className="menu-icon" />
                    {!collapsed && <span className="menu-text">{menu.name}</span>}
                    {!collapsed && (
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className={`arrow-icon ${activeMenu === menu.key ? "rotate" : ""}`}
                      />
                    )}
                  </div>
                  {!collapsed && activeMenu === menu.key && (
                    <ul className="submenu">
                      {menu.subItems.map((sub, subIndex) => (
                        <ul
                          key={subIndex}
                          className={`submenu-item ${isActive(sub.path) ? "active-sub" : ""}`}
                          onClick={() => handleNavigate(sub.path)}
                        >
                          {sub.label}
                        </ul>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;