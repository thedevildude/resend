import Home from "@/pages";
import AppLayout from "@/pages/layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
]);

export default router;