import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";



import Dashboard from "./Component/Superadmin/Dashboard/Dashboard";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Settings from "./Component/Superadmin/Setting/Setting";
import PlanBilling from "./Component/Superadmin/PlanBilling/PlanBilling";
import Home from "./Component/Website/Home";
import OrderManagement from "./Component/Superadmin/Planmanagement/PlanManagement";
import UserManagement from "./Component/Superadmin/Usermanagement/UserManagement";
import Login from "./Auth/Login";
import ActivityLogs from "./Component/Superadmin/ActivityLogs/ActivityLogs";
import BrandingCMS from "./Component/Superadmin/BrandingCMS/BrandingCMS";


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
    location.pathname === "/forgot-password"||
    location.pathname === "/login";

  return (
    <>
      {hideLayout ? (
        <Routes>
           <Route path="/login" element={<Login />} />
          {/*<Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> */}

          <Route path="/" element={<Home />} />

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
                    <Route path="/ordermanagement" element={<OrderManagement />} />
                     <Route path="/usermanagement" element={<UserManagement />} />
                       <Route path="/activitylogs" element={<ActivityLogs />} />
                         <Route path="/brandingcms" element={<BrandingCMS />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
