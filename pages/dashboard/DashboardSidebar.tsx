import dynamic from "next/dynamic";

const DashboardSidebar = dynamic(
  () => import("../../modules/dashboard/DashboardSidebar")
);

export default DashboardSidebar;
