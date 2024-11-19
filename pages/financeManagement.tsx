import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const FinanceManagement = dynamic(
  () => import("../modules/Finance-Management/FinanceManagement"),
  {
    ssr: false,
  }
);

const FinanceManagementPage = () => {
  return (
    <AuthenticatedLayout>
      <FinanceManagement />
    </AuthenticatedLayout>
  );
};

export default FinanceManagementPage;
