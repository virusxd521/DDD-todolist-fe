import React from "react";
import ReactDOM from "react-dom/client";
import "@/../app/globals.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/infrastructure/routing/routes";

// TODO: Think which implementation would be better. Context or hoc (Michal from kindred used the hoc approach)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
