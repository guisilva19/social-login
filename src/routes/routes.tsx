import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../screens/home/page";
import Contact from "../screens/contact/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
