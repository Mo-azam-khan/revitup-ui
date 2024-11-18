import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("../modules/login/LoginPage"), {
  loading: () => <p>Loading...</p>,
});

export default LoginPage;
