import { getLayout, LayoutProps } from "../../components/layout";
import { NextPageWithLayout } from "../_app";

type AddTodoPageProps = {};
const AddTodoPage: NextPageWithLayout<AddTodoPageProps, LayoutProps> = () => {
  return <div>Add Todo Page</div>;
};
AddTodoPage.getLayout = getLayout;
export default AddTodoPage;
