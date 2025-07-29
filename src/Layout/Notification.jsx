import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaUserCircle, FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Notification = () => {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const profileRef = useRef(null);
    const notificationRef = useRef(null);

    // Sample notifications data
    const notifications = [
        {
            id: 1,
            icon: "🔔",
            title: "Access Request",
            message: "User requested plan access",
            time: "10 min ago",
            read: false
        },
        {
            id: 2,
            icon: "📥",
            title: "New Message",
            message: "You have a new message from Admin",
            time: "25 min ago",
            read: false
        },
        // {
        //     id: 3,
        //     icon: "⚠️",
        //     title: "System Alert",
        //     message: "CPU Usage High (82%)",
        //     time: "1 hour ago",
        //     read: true
        // },
        {
            id: 4,
            icon: "💳",
            title: "Plan Purchased",
            message: "User successfully purchased the Premium Plan",
            time: "Just now",
            read: false
        }
    ];


    const unreadCount = notifications.filter(n => !n.read).length;

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdownOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setNotificationOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="navbar-right d-flex align-items-center gap-4">

            {/* Notification Dropdown */}
            <div className="notification-wrapper position-relative" ref={notificationRef}>
                <div
                    className="notification-icon-wrapper position-relative"
                    onClick={() => setNotificationOpen(!notificationOpen)}
                >
                    <FaBell className="notification-icon" />
                    {unreadCount > 0 && (
                        <span className="notification-badge">{unreadCount}</span>
                    )}
                </div>

                {notificationOpen && (
                    <div className="notification-dropdown">
                        <div className="notification-header">
                            <h5>Notifications</h5>
                            <small>{unreadCount} unread</small>
                        </div>
                        <div className="notification-list">
                            {notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className={`notification-item ${!notification.read ? 'unread' : ''}`}
                                >
                                    <div className="notification-icon">{notification.icon}</div>
                                    <div className="notification-content">
                                        <h6>{notification.title}</h6>
                                        <p>{notification.message}</p>
                                        <small>{notification.time}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="notification-footer">
                            <Link to="/notifications">View all notifications</Link>
                        </div> */}
                    </div>
                )}
            </div>

            {/* User Profile Dropdown */}
           
        </div>
    );
};

export default Notification;