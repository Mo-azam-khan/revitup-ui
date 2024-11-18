import dynamic from "next/dynamic";

const DashboardMain = dynamic(() => import("../../modules/dashboard/DashboardMain"));

export default DashboardMain;
