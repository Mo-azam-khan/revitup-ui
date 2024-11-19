import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const WorkerManagement = dynamic(
  () => import("../modules/Worker-management/WorkerManagement"),
  {
    ssr: false,
  }
);

const WorkerManagementPage = () => {
  return (
    <AuthenticatedLayout>
      <WorkerManagement />
    </AuthenticatedLayout>
  );
};

export default WorkerManagementPage;
