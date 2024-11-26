// import Appbar from "@/modules/common/Appbar";
// import Layout from "@/modules/common/Layout";
// import Navigation from "@/modules/common/Sidebar";
// import EntryExitHome from "@/modules/entry-exit/EntryExitHome";
// import VehicleEntryPage from "@/modules/entry-exit/VehicleEntryPage";
// import VehicleExitPage from "@/modules/entry-exit/VehicleExitPage";
// import LoginPage from "@/modules/login/LoginPage";
// import Profile from "@/modules/profile/Profile";
// import Quotation from "@/modules/quotation/quotation";
// import WaitingVehiclesPage from "@/modules/waiting-vehicles/WaitingVehiclesPage";
// import Head from "next/head";
// import React from "react";
// import DashboardSidebar from "@/modules/dashboard/DashboardSidebar";
// import DashboardMain from "@/modules/dashboard/DashboardMain";
// import RevedUpRepairs from "@/modules/quotation/RevedUpRepairs";
// import Employees from "@/modules/profile/Employees";
// import ClientCard from "@/modules/HRSD/ClientCard";
// import Orders from "@/modules/orders/Orders";
// import QuotationList from "@/modules/quotation/quotationList";
// import OrderStatus from "@/modules/orders/OrderStatus";
// import EmployeeManagement from "@/modules/HR-Employee-management/EmployeeManagement";
// import InventoryManagement from "@/modules/Inventory-Management/InventoryManagement";
// import OrderBilling from "@/modules/orders/OrderBilling";
// import WorkerManagement from "@/modules/Worker-management/WorkerManagement";
// import BayManagement from "@/modules/Bay-Management/BayManagement";
// import WorkerWorking from "@/modules/Worker-working/WorkerWorking";
// import FinanceManagement from "@/modules/Finance-Management/FinanceManagement";
// import Receipts from "@/modules/Receipts/Receipts";
// import SalarySlip from "@/modules/Salary-Slip/SalarySlip";
// import SignUp from "@/modules/Registration/SignUp";

// export default function Home() {
//   const [drawerOpen, setDrawerOpen] = React.useState<Boolean>(false);
//   return (
//     <>
//       <Head>
//         <title>Revitup</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {/* Comment  the Layout.Root to see other pages -start  */}
//       <Layout.Root
//         sx={{
//           ...(drawerOpen && {
//             height: "100vh",
//             overflow: "hidden",
//           }),
//         }}
//       >
//         <Layout.Header>
//           <Appbar />
//         </Layout.Header>
//         <Layout.SideNav>
//           {/* <Navigation /> */}
//           <DashboardSidebar />
//         </Layout.SideNav>
//         <Layout.Main>
//           {/* <Profile />  */}
//           {/* <Quotation /> */}
//           {/* <RevedUpRepairs/> */}
//           {/* <DashboardMain /> */}
//           {/* <Employees /> */}
//           {/* <Orders/> */}
//           {/* <QuotationList/>  */}
//           {/* <OrderStatus/> */}
//           {/* <ClientCard /> */}
//           {/* <EmployeeManagement /> */}
//           {/* <InventoryManagement /> */}
//           {/* <OrderBilling/> */}
//           {/* <WorkerManagement /> */}
//           {/* <BayManagement /> */}
//           {/* <WorkerWorking/> */}
//           {/* <FinanceManagement/> */}
//           {/* <Receipts /> */}
//           {/* <SalarySlip/> */}
//         </Layout.Main>
//       </Layout.Root>
//       {/* Comment  the Layout.Root to see other pages -end  */}

//       {/* <LoginPage/>  */}
//       {/* <SignUp/> */}
//       {/* <VehicleEntryPage /> */}
//       {/* <EntryExitHome/> */}
//       {/* <VehicleExitPage/> */}
//       {/* <WaitingVehiclesPage />  */}
//     </>
//   );
// }

// import React, { useState } from "react";
// import Head from "next/head";
// import Appbar from "@/modules/common/Appbar";
// import Layout from "@/modules/common/Layout";
// import DashboardSidebar from "@/modules/dashboard/DashboardSidebar";
// import Profile from "@/modules/profile/Profile";
// import Quotation from "@/modules/quotation/quotation";
// import RevedUpRepairs from "@/modules/quotation/RevedUpRepairs";
// import DashboardMain from "@/modules/dashboard/DashboardMain";
// import Employees from "@/modules/profile/Employees";
// import Orders from "@/modules/orders/Orders";
// import QuotationList from "@/modules/quotation/quotationList";
// import OrderStatus from "@/modules/orders/OrderStatus";
// import ClientCard from "@/modules/HRSD/ClientCard";
// import EmployeeManagement from "@/modules/HR-Employee-management/EmployeeManagement";
// import InventoryManagement from "@/modules/Inventory-Management/InventoryManagement";
// import OrderBilling from "@/modules/orders/OrderBilling";
// import WorkerManagement from "@/modules/Worker-management/WorkerManagement";
// import BayManagement from "@/modules/Bay-Management/BayManagement";
// import WorkerWorking from "@/modules/Worker-working/WorkerWorking";
// import FinanceManagement from "@/modules/Finance-Management/FinanceManagement";
// import Receipts from "@/modules/Receipts/Receipts";
// import SalarySlip from "@/modules/Salary-Slip/SalarySlip";
// import SignUp from "@/modules/Registration/SignUp";
// import LoginPage from "@/modules/login/LoginPage";

// export default function Home() {
//   const [currentPage, setCurrentPage] = useState("dashboard"); // Default to dashboard page
//   const [drawerOpen, setDrawerOpen] = useState<Boolean>(false);

//   // Function to render the correct component based on `currentPage`
//   const renderPageContent = () => {
//     switch (currentPage) {
//       case "profile":
//         return <Profile />;
//       case "quotation":
//         return <Quotation />;
//       case "revedUpRepairs":
//         return <RevedUpRepairs />;
//       case "dashboard":
//         return <DashboardMain />;
//       case "employees":
//         return <Employees />;
//       case "orders":
//         return <Orders />;
//       case "quotationList":
//         return <QuotationList />;
//       case "orderStatus":
//         return <OrderStatus />;
//       case "clientCard":
//         return <ClientCard />;
//       case "employeeManagement":
//         return <EmployeeManagement />;
//       case "inventoryManagement":
//         return <InventoryManagement />;
//       case "orderBilling":
//         return <OrderBilling />;
//       case "workerManagement":
//         return <WorkerManagement />;
//       case "bayManagement":
//         return <BayManagement />;
//       case "workerWorking":
//         return <WorkerWorking />;
//       case "financeManagement":
//         return <FinanceManagement />;
//       case "receipts":
//         return <Receipts />;
//       case "salarySlip":
//         return <SalarySlip />;
//       case "signUp":
//         return <SignUp />;
//       case "login":
//         return <LoginPage />;
//       default:
//         return <DashboardMain />; // Default to the dashboard if route is unknown
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Revitup</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Layout.Root
//         sx={{
//           ...(drawerOpen && {
//             height: "100vh",
//             overflow: "hidden",
//           }),
//         }}
//       >
//         <Layout.Header>
//           <Appbar />
//         </Layout.Header>
//         <Layout.SideNav>
//           <DashboardSidebar setCurrentPage={setCurrentPage} />
//         </Layout.SideNav>
//         <Layout.Main>{renderPageContent()}</Layout.Main>
//       </Layout.Root>
//     </>
//   );
// }

// import React, { useState } from "react";
// import Head from "next/head";
// import Appbar from "@/modules/common/Appbar";
// import Layout from "@/modules/common/Layout";
// import DashboardSidebar from "@/modules/dashboard/DashboardSidebar";
// import Profile from "@/modules/profile/Profile";
// import Quotation from "@/modules/quotation/quotation";
// import RevedUpRepairs from "@/modules/quotation/RevedUpRepairs";
// import DashboardMain from "@/modules/dashboard/DashboardMain";
// import Employees from "@/modules/profile/Employees";
// import Orders from "@/modules/orders/Orders";
// import QuotationList from "@/modules/quotation/quotationList";
// import OrderStatus from "@/modules/orders/OrderStatus";
// import ClientCard from "@/modules/HRSD/ClientCard";
// import EmployeeManagement from "@/modules/HR-Employee-management/EmployeeManagement";
// import InventoryManagement from "@/modules/Inventory-Management/InventoryManagement";
// import OrderBilling from "@/modules/orders/OrderBilling";
// import WorkerManagement from "@/modules/Worker-management/WorkerManagement";
// import BayManagement from "@/modules/Bay-Management/BayManagement";
// import WorkerWorking from "@/modules/Worker-working/WorkerWorking";
// import FinanceManagement from "@/modules/Finance-Management/FinanceManagement";
// import Receipts from "@/modules/Receipts/Receipts";
// import SalarySlip from "@/modules/Salary-Slip/SalarySlip";
// import SignUp from "@/modules/Registration/SignUp";
// import LoginPage from "@/modules/login/LoginPage";
// import EntryExitHome from "@/modules/entry-exit/EntryExitHome";

// export default function Home() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
//   const [currentPage, setCurrentPage] = useState("signUp"); // Default to signup page

//   // Function to handle login or signup completion
//   const handleAuthSuccess = () => {
//     setIsAuthenticated(true);
//     setCurrentPage("dashboard"); // Redirect to dashboard after login/signup
//   };

//   // Render the correct component based on `currentPage`
//   const renderPageContent = () => {
//     switch (currentPage) {
//       case "profile":
//         return <Profile />;
//       case "quotation":
//         return <Quotation />;
//       case "revedUpRepairs":
//         return <RevedUpRepairs />;
//       case "dashboard":
//         return <DashboardMain />;
//       case "employees":
//         return <Employees />;
//       case "orders":
//         return <Orders />;
//       case "quotationList":
//         return <QuotationList />;
//       case "orderStatus":
//         return <OrderStatus />;
//       case "clientCard":
//         return <ClientCard />;
//       case "employeeManagement":
//         return <EmployeeManagement />;
//       case "inventoryManagement":
//         return <InventoryManagement />;
//       case "orderBilling":
//         return <OrderBilling />;
//       case "workerManagement":
//         return <WorkerManagement />;
//       case "bayManagement":
//         return <BayManagement />;
//       case "workerWorking":
//         return <WorkerWorking />;
//       case "financeManagement":
//         return <FinanceManagement />;
//       case "receipts":
//         return <Receipts />;
//       case "salarySlip":
//         return <SalarySlip />;
//       case "EntryExitHome":
//         return <EntryExitHome />;
//       case "signUp":
//         return <SignUp onLogin={handleAuthSuccess} />;
//       case "login":
//         return <LoginPage onLogin={handleAuthSuccess} />;
//       default:
//         return <DashboardMain />;
//     }
//   };
//   <EntryExitHome/>

//   return (
//     <>
//       <Head>
//         <title>Revitup</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {isAuthenticated ? (
//         // Show dashboard with appbar and sidebar after login
//         <Layout.Root>
//           <Layout.Header>
//             <Appbar />
//           </Layout.Header>
//           <Layout.SideNav>
//             <DashboardSidebar setCurrentPage={setCurrentPage} />
//           </Layout.SideNav>
//           <Layout.Main>{renderPageContent()}</Layout.Main>
//         </Layout.Root>
//       ) : (
//         // Only show signup/login page without appbar and sidebar
//         renderPageContent()
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import Head from "next/head";
import Appbar from "@/modules/common/Appbar";
import Layout from "@/modules/common/Layout";
import DashboardSidebar from "@/modules/dashboard/DashboardSidebar";
import Profile from "@/modules/profile/Profile";
import Quotation from "@/modules/quotation/quotation";
import RevedUpRepairs from "@/modules/quotation/RevedUpRepairs";
import DashboardMain from "@/modules/dashboard/DashboardMain";
import Employees from "@/modules/profile/Employees";
import Orders from "@/modules/orders/Orders";
import QuotationList from "@/modules/quotation/quotationList";
import OrderStatus from "@/modules/orders/OrderStatus";
import ClientCard from "@/modules/HRSD/ClientCard";
import EmployeeManagement from "@/modules/HR-Employee-management/EmployeeManagement";
import InventoryManagement from "@/modules/Inventory-Management/InventoryManagement";
import OrderBilling from "@/modules/orders/OrderBilling";
import WorkerManagement from "@/modules/Worker-management/WorkerManagement";
import BayManagement from "@/modules/Bay-Management/BayManagement";
import WorkerWorking from "@/modules/Worker-working/WorkerWorking";
import FinanceManagement from "@/modules/Finance-Management/FinanceManagement";
import Receipts from "@/modules/Receipts/Receipts";
import SalarySlip from "@/modules/Salary-Slip/SalarySlip";
import SignUp from "@/modules/Registration/SignUp";
import LoginPage from "@/modules/login/LoginPage";
import EntryExitHome from "@/modules/entry-exit/EntryExitHome";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [currentPage, setCurrentPage] = useState("signUp"); // Default to signup page

  // Function to handle login or signup completion
  const handleAuthSuccess = (roleId) => {
    setIsAuthenticated(true);

    // Redirect based on role ID
    if (roleId === 6) {
      setCurrentPage("EntryExitHome"); // Redirect to EntryExitHome for role_id 6
    } else {
      setCurrentPage("dashboard"); // Redirect to dashboard for other roles
    }
  };

  // Render the correct component based on `currentPage`
  const renderPageContent = () => {
    switch (currentPage) {
      case "profile":
        return <Profile />;
      case "quotation":
        return <Quotation />;
      case "revedUpRepairs":
        return <RevedUpRepairs />;
      case "dashboard":
        return <DashboardMain />;
      case "employees":
        return <Employees />;
      case "orders":
        return <Orders />;
      case "quotationList":
        return <QuotationList />;
      case "orderStatus":
        return <OrderStatus />;
      case "clientCard":
        return <ClientCard />;
      case "employeeManagement":
        return <EmployeeManagement />;
      case "inventoryManagement":
        return <InventoryManagement />;
      case "orderBilling":
        return <OrderBilling />;
      case "workerManagement":
        return <WorkerManagement />;
      case "bayManagement":
        return <BayManagement />;
      case "workerWorking":
        return <WorkerWorking />;
      case "financeManagement":
        return <FinanceManagement />;
      case "receipts":
        return <Receipts />;
      case "salarySlip":
        return <SalarySlip />;
      case "EntryExitHome":
        return <EntryExitHome />;
      case "signUp":
        return <SignUp onLogin={(roleId) => handleAuthSuccess(roleId)} />;
      case "login":
        return <LoginPage onLogin={(roleId) => handleAuthSuccess(roleId)} />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <>
      <Head>
        <title>Revitup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isAuthenticated ? (
        // Show dashboard with appbar and sidebar after login
        <Layout.Root>
          <Layout.Header>
            <Appbar />
          </Layout.Header>
          <Layout.SideNav>
            <DashboardSidebar setCurrentPage={setCurrentPage} />
          </Layout.SideNav>
          <Layout.Main>{renderPageContent()}</Layout.Main>
        </Layout.Root>
      ) : (
        // Only show signup/login page without appbar and sidebar
        renderPageContent()
      )}
    </>
  );
}
