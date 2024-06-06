import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./main.css";
import App from "./App";
import { About } from "./pages/about";
import "./i18n";

const router = createBrowserRouter([
  {
    path: "/my-portfolio",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
