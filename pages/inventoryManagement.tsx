import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const InventoryManagement = dynamic(
  () => import("../modules/Inventory-Management/InventoryManagement"),
  {
    ssr: false,
  }
);

const InventoryManagementPage = () => {
  return (
    <AuthenticatedLayout>
      <InventoryManagement />
    </AuthenticatedLayout>
  );
};

export default InventoryManagementPage;
