import { getLayout, LayoutProps } from "../components/layout";
import { NextPageWithLayout } from "./_app";

type ProfilePageProps = {};
const ProfilePage: NextPageWithLayout<ProfilePageProps, LayoutProps> = () => {
  return <div>Profile Page</div>;
};
ProfilePage.getLayout = getLayout;
export default ProfilePage;
