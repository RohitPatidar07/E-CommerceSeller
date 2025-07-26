import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const credentials = {
      admin: { email: "admin@example.com", password: "admin123" },
      superadmin: { email: "superadmin@example.com", password: "super123" },
      user: { email: "user@example.com", password: "user123" },
    };

    const validUser = credentials[role];

    if (email === validUser.email && password === validUser.password) {
      localStorage.setItem("userRole", role);

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "superadmin") {
        navigate("/superadmin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } else {
      setError("Invalid email or password for selected role.");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-white px-3">
      <div
        className="card border-0 shadow w-100"
        style={{
          maxWidth: "960px",
          borderRadius: "1.5rem",
          overflow: "hidden",
          background: "linear-gradient(to right, #0f172a, #1e3a8a)",
        }}
      >
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              alt="Login Illustration"
              className="img-fluid h-100 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6 d-flex align-items-center p-5 text-white">
            <div className="w-100">
              <div className="d-flex align-items-center justify-content-center mb-4">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "linear-gradient(to right, #60a5fa, #3b82f6)",
                  }}
                >
                  <i className="fas fa-cube text-white"></i>
                </div>
                <h3 className="fw-bold m-0">SELLER PRO</h3>
              </div>

              <h2 className="fw-bold text-center mb-3">Welcome Back!</h2>
              <p className="text-white-50 text-center mb-4">
                Login to manage your dashboard
              </p>

              {error && (
                <div className="alert alert-danger py-2 px-3 small">{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-white">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3 position-relative">
                  <label className="form-label text-white">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash-fill text-white-50"></i>
                    ) : (
                      <i className="bi bi-eye-fill text-white-50"></i>
                    )}
                  </span>
                </div>

                <div className="mb-3">
                  <label className="form-label text-white">Select Role</label>
                  <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember" />
                    <label className="form-check-label text-white-50" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-white-50 text-decoration-none small">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn w-100 py-2 fw-semibold text-white"
                  style={{
                    background: "linear-gradient(to right, #60a5fa, #3b82f6)",
                    border: "none",
                  }}
                >
                  <i className="fas fa-sign-in-alt me-2"></i> Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
