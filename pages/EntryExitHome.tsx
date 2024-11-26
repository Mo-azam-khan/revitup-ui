import dynamic from "next/dynamic";

const EntryExitHome = dynamic(() => import("../modules/entry-exit/EntryExitHome"), {
  loading: () => <p>Loading...</p>,
});

export default EntryExitHome;
