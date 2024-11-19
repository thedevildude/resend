import Home from "@/pages";
import AppLayout from "@/pages/layout";
import PrivacyPolicy from "@/pages/privacy-policy";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>
      }
    ],
  },
]);

export default router;