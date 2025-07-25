import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Login from "./Auth/Login";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const role = localStorage.getItem("role");

  // Check if device is mobile on initial render
  useEffect(() => {
    const checkIfMobile = () => {
      return window.innerWidth <= 768; // Standard mobile breakpoint
    };
    
    if (checkIfMobile()) {
      setIsSidebarCollapsed(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();

  // Pages that don't need layout (auth pages)
  const hideLayout = location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  // Protected route component
  const ProtectedRoute = ({ children, allowedRoles }) => {
    if (!role || !allowedRoles.includes(role)) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <>

      {hideLayout ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> */}
         
        </Routes>
      ) : (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Sidebar
              collapsed={isSidebarCollapsed}
              setCollapsed={setIsSidebarCollapsed}
            />
            <div className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""}`}>
              <Routes>


                 {/* profile */}
                       
                      {/* profil end */}


                      
                {/* Admin Routes */}
                <Route path="/superadmin/*" element={
                  <ProtectedRoute allowedRoles={["SuperAdmin"]}>
                    <Routes>

                    </Routes>
                  </ProtectedRoute>
                } />

                {/* Staff Routes */}
                <Route path="/admin/*" element={
                  <ProtectedRoute allowedRoles={["Admin"]}>
                    <Routes>
                  
                    </Routes>
                  </ProtectedRoute>
                } />

                {/* User Routes */}
                <Route path="/user/*" element={
                  <ProtectedRoute allowedRoles={["User"]}>
                    <Routes>
               
                    </Routes>
                  </ProtectedRoute>
                } />

                {/* Redirect to appropriate dashboard based on role */}
                <Route path="/" element={
                  role === "SuperAdmin" ? <Navigate to="/superadmin/dashboard" /> :
                    role === "Admin" ? <Navigate to="/admin/dashboard" /> :
                      role === "User" ? <Navigate to="/user/dashboard" /> :
                        <Navigate to="/" />
                } />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;