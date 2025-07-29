import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole");
    setAuthToken(token);
    setUserRole(role);

    const handleStorageChange = () => {
      setAuthToken(localStorage.getItem("authToken"));
      setUserRole(localStorage.getItem("userRole"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getDashboardPath = () => {
    if (userRole === "admin") return "/admin/dashboard";
    if (userRole === "superadmin") return "/superadmin/dashboard";
    return "/";
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setAuthToken(null);
    setUserRole("");
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav
      className="fixed-top shadow-sm"
      style={{
        height: "60px",
        background: "linear-gradient(to right, #0f172a, #1e3a8a)",
        zIndex: 1050,
      }}
    >
      <div className="container h-100">
        <div className="d-flex justify-content-between align-items-center h-100">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(to right, #3b82f6, #2563eb)",
              }}
            >
              <i className="fas fa-cube text-white fs-5"></i>
            </div>
            <h1 className="text-white fs-5 fw-bold m-0">SELLER PRO</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center gap-4">
            <NavLink
              to="/"
              className="text-white text-decoration-none small fw-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className="text-white text-decoration-none small fw-medium"
            >
              Features
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-white text-decoration-none small fw-medium"
            >
              Pricing
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white text-decoration-none small fw-medium"
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className="text-white text-decoration-none small fw-medium"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white text-decoration-none small fw-medium"
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="d-none d-md-block">
            {authToken ? (
              <>
                <Link to={getDashboardPath()}>
                  <button
                    className="btn text-white px-4 py-2 small fw-medium shadow me-2"
                    style={{
                      background: "linear-gradient(to right, #22c55e, #16a34a)",
                      minWidth: "130px",
                      border: "none",
                    }}
                  >
                    <i className="fas fa-tachometer-alt me-2"></i>
                    Dashboard
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button
                  className="btn text-white px-4 py-2 small fw-medium shadow"
                  style={{
                    background: "linear-gradient(to right, #60a5fa, #3b82f6)",
                    minWidth: "100px",
                    border: "none",
                  }}
                >
                  <i className="fas fa-user-circle me-2"></i>
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="d-md-none">
            <button
              onClick={toggleMenu}
              className="btn text-white p-2"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} fs-5`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="d-md-none bg-dark bg-opacity-95 border-top border-secondary py-3 px-4"
          style={{ transition: "all 0.3s ease" }}
        >
          <div className="d-flex flex-column gap-3">
            <NavLink
              to="/"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-home me-2"></i> Home
            </NavLink>
            <NavLink
              to="/features"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-star me-2"></i> Features
            </NavLink>
            <NavLink
              to="/pricing"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-tag me-2"></i> Pricing
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-blog me-2"></i> Blog
            </NavLink>
            <NavLink
              to="/about"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-info-circle me-2"></i> About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-envelope me-2"></i> Contact
            </NavLink>

            {authToken ? (
              <>
                <Link to={getDashboardPath()}>
                  <button
                    className="btn text-white w-100 mt-3 mb-2"
                    style={{
                      background: "linear-gradient(to right, #22c55e, #16a34a)",
                      border: "none",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="fas fa-tachometer-alt me-2"></i> Dashboard
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button
                  className="btn text-white w-100 mt-3"
                  style={{
                    background: "linear-gradient(to right, #60a5fa, #3b82f6)",
                    border: "none",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-user-circle me-2"></i> Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;