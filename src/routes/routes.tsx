import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/home/page";
import Contact from "../screens/contact/page";
import Error from "../screens/error/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
