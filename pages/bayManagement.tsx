import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const BayManagement = dynamic(
  () => import("../modules/Bay-Management/BayManagement"),
  {
    ssr: false,
  }
);

const BayManagementPage = () => {
  return (
    <AuthenticatedLayout>
      <BayManagement />
    </AuthenticatedLayout>
  );
};

export default BayManagementPage;
