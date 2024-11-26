import dynamic from "next/dynamic";

const WaitingVehiclesPage = dynamic(() => import("../modules/waiting-vehicles/WaitingVehiclesPage"), {
  loading: () => <p>Loading...</p>,
});

export default WaitingVehiclesPage;
