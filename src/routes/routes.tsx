import { createBrowserRouter } from "react-router-dom";
import SignIn from "../screens/signIn/signIn";
import SignUp from "../screens/signUp/signUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
