import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ResturantDetails from "./ResturantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home/:id",
    element: <ResturantDetails />,
  },
]);

export default router;
