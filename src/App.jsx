import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";



import Dashboard from "./Component/Superadmin/Dashboard/Dashboard";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Settings from "./Component/Superadmin/Setting/Setting";
import PlanBilling from "./Component/Superadmin/PlanBilling/PlanBilling";


function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => window.innerWidth <= 768;
    if (checkIfMobile()) {
      setIsSidebarCollapsed(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();

  const hideLayout =
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgot-password";

  return (
    <>
      {hideLayout ? (
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
            <div
              className={`right-side-content ${
                isSidebarCollapsed ? "collapsed" : ""
              }`}
            >
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                 <Route path="/setting" element={<Settings />} />
                   <Route path="/planbilling" element={<PlanBilling />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
