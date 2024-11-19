import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const EmployeeManagement = dynamic(
  () => import("../modules/HR-Employee-management/EmployeeManagement"),
  {
    ssr: false,
  }
);

const EmployeeManagementPage = () => {
  return (
    <AuthenticatedLayout>
      <EmployeeManagement />
    </AuthenticatedLayout>
  );
};

export default EmployeeManagementPage;
