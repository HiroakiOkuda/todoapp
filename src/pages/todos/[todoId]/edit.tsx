import { getLayout, LayoutProps } from "../../../components/layout";
import { NextPageWithLayout } from "@/pages/_app";

type EditTodoPageProps = {};
const EditTodoPage: NextPageWithLayout<EditTodoPageProps, LayoutProps> = () => {
  return <div>Edit Todo Page</div>;
};
EditTodoPage.getLayout = getLayout;
export default EditTodoPage;
