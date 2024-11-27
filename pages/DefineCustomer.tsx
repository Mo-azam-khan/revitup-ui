import dynamic from "next/dynamic";

const DefineCustomer = dynamic(
  () => import("../modules/waiting-vehicles/DefineCustomer"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default DefineCustomer;
