import { createBrowserRouter } from "react-router-dom";
import Registration from "@/user-interface/layout/registrationPage";
import UserProfilePage from "@/user-interface/layout/userProfilePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "user/:userId",
    element: <UserProfilePage />,
  },
]);
