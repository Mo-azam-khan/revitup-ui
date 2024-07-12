import Appbar from "@/modules/common/Appbar";
import Layout from "@/modules/common/Layout";
import Navigation from "@/modules/common/Sidebar";
import EntryExitHome from "@/modules/entry-exit/EntryExitHome";
import VehicleEntryPage from "@/modules/entry-exit/VehicleEntryPage";
import VehicleExitPage from "@/modules/entry-exit/VehicleExitPage";
import LoginPage from "@/modules/login/LoginPage";
import Profile from "@/modules/profile/Profile";
import Quotation from "@/modules/quotation/quotation";
import WaitingVehiclesPage from "@/modules/waiting-vehicles/WaitingVehiclesPage";
import Head from "next/head";
import React from "react";
import DashboardSidebar from "@/modules/dashboard/DashboardSidebar";
import DashboardMain from "@/modules/dashboard/DashboardMain";
import RevedUpRepairs from "@/modules/quotation/RevedUpRepairs";
import Employees from "@/modules/profile/Employees";
import ClientCard from "@/modules/HRSD/ClientCard";
import Orders from "@/modules/orders/Orders";
import QuotationList from "@/modules/quotation/quotationList";
import OrderStatus from "@/modules/orders/OrderStatus";
import EmployeeManagement from "@/modules/HR-Employee-management/EmployeeManagement";
import InventoryManagement from "@/modules/Inventory-Management/InventoryManagement";
import OrderBilling from "@/modules/orders/OrderBilling";
import WorkerManagement from "@/modules/Worker-management/WorkerManagement";
import BayManagement from "@/modules/Bay-Management/BayManagement";
import WorkerWorking from "@/modules/Worker-working/WorkerWorking";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState<Boolean>(false);
  return (
    <>
      <Head>
        <title>Revitup</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Comment  the Layout.Root to see other pages -start  */}
      <Layout.Root
        sx={{
          ...(drawerOpen && {
            height: "100vh",
            overflow: "hidden",
          }),
        }}
      >
        <Layout.Header>
          <Appbar />
        </Layout.Header>
        <Layout.SideNav>
          {/* <Navigation /> */}
          <DashboardSidebar />
        </Layout.SideNav>
        <Layout.Main>
          {/* <Profile />  */}
          {/* <Quotation /> */}
          {/* <RevedUpRepairs/> */}
          {/* <DashboardMain /> */}
          {/* <Employees /> */}
          {/* <Orders/> */}
          {/* <QuotationList/>  */}
          {/* <OrderStatus/> */}
          {/* <ClientCard /> */}
          {/* <EmployeeManagement /> */}
          {/* <InventoryManagement /> */}
          {/* <OrderBilling/> */}
          {/* <WorkerManagement /> */}
          {/* <BayManagement /> */}
          <WorkerWorking/>
        </Layout.Main>
      </Layout.Root>
      {/* Comment  the Layout.Root to see other pages -end  */}

      {/* <LoginPage/>  */}
      {/* <VehicleEntryPage />  */}
      {/* <EntryExitHome/> */}
      {/* <VehicleExitPage/> */}
      {/* <WaitingVehiclesPage />  */}
    </>
  );
}
