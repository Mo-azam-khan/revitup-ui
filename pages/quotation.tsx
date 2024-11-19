import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const Quotation = dynamic(() => import("../modules/quotation/quotation"), {
  ssr: false,
});

const QuotationPage = () => {
  return (
    <AuthenticatedLayout>
      <Quotation />
    </AuthenticatedLayout>
  );
};

export default QuotationPage;
