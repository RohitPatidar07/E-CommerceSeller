import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";

import Dashboard from "./Component/Superadmin/Dashboard/Dashboard";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Settings from "./Component/Superadmin/Setting/Setting";
import PlanBilling from "./Component/Superadmin/PlanBilling/PlanBilling";

import OrderManagement from "./Component/Superadmin/Planmanagement/PlanManagement";
import UserManagement from "./Component/Superadmin/AdminManagement/AdminManagement";
import Login from "./Auth/Login";
import ActivityLogs from "./Component/Superadmin/ActivityLogs/ActivityLogs";
import BrandingCMS from "./Component/Superadmin/BrandingCMS/BrandingCMS";
import PlanManagement from "./Component/Superadmin/Planmanagement/PlanManagement";
import PlansPackages from "./Component/Superadmin/PlanPackages/PlanPackages";
import PlanRequest from "./Component/Superadmin/PlanRequest/PlanRequest";
import Payments from "./Component/Superadmin/Payment/Payments";
import Features from "./Component/Website/Features";
import Pricing from "./Component/Website/Pricing";
import About from "./Component/Website/About";
import Contact from "./Component/Website/Contact";
import Blog from "./Component/Website/Blog";
import Home from "./Component/Website/Home";
import AdminDashboard from "./Component/Admin/Dashboard/AdminDashboard";
import Reports from "./Component/Superadmin/Setting/Reports/Reports";
import OrderDetails from "./Component/Admin/OrderDetails/OrderDetails";
import InventoryManagement from "./Component/UserDashboard/InventoryManagement/InventoryManagement";
import PlansBilling from "./Component/Admin/PlansBilling/PlansBilling";
import Setting from "./Component/Admin/Setting/Setting";
import OrderManagements from "./Component/Admin/OrderManagements/OrderManagements";
import UserManagements from "./Component/Admin/UserManagements/UserManagements";
import ChannelIntegration from "./Component/Admin/ChannelIntegration/ChannelIntegration";
import SystemAlerts from "./Component/Admin/SystemAlerts/SystemAlerts";
import InventoryManagements from "./Component/Admin/InventoryManagements/InventoryManagements";
import ReportsDashboard from "./Component/Admin/ReportsDashboard/ReportsDashboard";
import ShippingSetting from "./Component/Admin/ShippingSetting/ShippingSetting";
import DeliveryPartner from "./Component/Admin/DeliveryPartner/DeliveryPartner";
import Profile from "./Profile/Profile";

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
    location.pathname === "/forgot-password" ||
    location.pathname === "/login"||
    location.pathname === "/features"||
    location.pathname === "/pricing"||
    location.pathname === "/about"||
    location.pathname === "/blog"||
    location.pathname === "/contact";
  return (
    <>
      {hideLayout ? (
  
        <Routes>
          <Route path="/login" element={<Login />} />
          {/*<Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> */}

          <Route path="/" element={<Home/>} />
          
          <Route path="/features" element={<Features/>} />
                  
          <Route path="/pricing" element={<Pricing/>} />    
          <Route path="/about" element={<About/>} />    
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
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
              className={`right-side-content ${isSidebarCollapsed ? "collapsed" : ""
                }`}
            >
              <Routes>

                {/* superadmin routes */}
                <Route path="/superadmin/dashboard" element={<Dashboard />} />
                <Route path="/superadmin/setting" element={<Settings />} />
                <Route path="/superadmin/planbilling" element={<PlanBilling />} />
                <Route path="/superadmin/ordermanagement" element={<OrderManagement />} />
                <Route path="/superadmin/usermanagement" element={<UserManagement />} />
                <Route path="/superadmin/activitylogs" element={<ActivityLogs />} />
                <Route path="/superadmin/brandingcms" element={<BrandingCMS />} />
                <Route path="/superadmin/planmanagement" element={<PlanManagement />} />
                <Route path="/superadmin/planpackages" element={<PlansPackages />} />
                <Route path="/superadmin/planrequest" element={<PlanRequest />} />
                <Route path="/superadmin/payment" element={<Payments />} />

                {/* Amindmin routes */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/reportdashboard" element={<ReportsDashboard />} />
                <Route path="/admin/orderdetails" element={<OrderDetails />} />
                <Route path="/admin/ordermanagements" element={<OrderManagements />} />
                <Route path="/admin/usermanagements" element={<UserManagements />} />
                <Route path="/admin/plansbilling" element={<PlansBilling />} />
                <Route path="/admin/setting" element={<Setting />} />
                <Route path="/admin/channelintegration" element={<ChannelIntegration />} />
                <Route path="/admin/systemalerts" element={<SystemAlerts />} />
                <Route path="/admin/inventorymanagements" element={<InventoryManagements />} />
                <Route path="/admin/shippingsetting" element={<ShippingSetting />} />
                 <Route path="/admin/deliverypartner" element={<DeliveryPartner />} />

                 {/* Profile */}
                  <Route path="/profile" element={<Profile />} />


                {/* User routes */}
                <Route path="/user/inventorymanagement" element={<InventoryManagement />} />
                <Route path="/user/reports" element={<Reports />} />

              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
