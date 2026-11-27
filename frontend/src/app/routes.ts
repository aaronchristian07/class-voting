import {
  createBrowserRouter
} from "react-router";
import VotePage from "../pages/VotePage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/vote",
    Component: VotePage,
  },
  {
    path: "/",
    Component: App,
  }
]);

export default router;