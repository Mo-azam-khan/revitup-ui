import dynamic from "next/dynamic";
import AuthenticatedLayout from "@/pages/AuthenticatedLayout";

const Profile = dynamic(() => import("../modules/profile/Profile"), {
  ssr: false,
});

const ProfilePage = () => {
  return (
    <AuthenticatedLayout>
      <Profile />
    </AuthenticatedLayout>
  );
};

export default ProfilePage;
