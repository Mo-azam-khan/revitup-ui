import React from "react";
import Appbar from "@/modules/common/Appbar";
import DashboardSidebar from "@/modules/dashboard/DashboardSidebar";
import Layout from "@/modules/common/Layout";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout.Root>
      <Layout.Header>
        <Appbar />
      </Layout.Header>

      <Layout.SideNav>
        <DashboardSidebar />
      </Layout.SideNav>

      <Layout.Main>{children}</Layout.Main>
    </Layout.Root>
  );
};

export default AuthenticatedLayout;
