import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./global/resetcss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import "./lib/i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
