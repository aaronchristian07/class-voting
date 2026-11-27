import {
  createBrowserRouter
} from "react-router";
import App from "../App";
import ClientPage from "../pages/ClientPage";

const router = createBrowserRouter([
  {
    path: "/vote",
    Component: ClientPage,
  },
  {
    path: "/",
    Component: App,
  }
]);

export default router;