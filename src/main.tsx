import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const router = createBrowserRouter([
  {
    path: "/my-portfolio",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
