import dynamic from "next/dynamic";

const Appbar = dynamic(() => import("../../modules/common/Appbar"));

export default Appbar;
