import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Heroes from "./pages/Heroes";
import "./global.css";
import { HeroProvider } from "./contexts/Hero";
import RegisterHero from "./pages/RegisterHero";
import EditHero from "./pages/EditHero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/herois",
    element: <Heroes />,
  },
  {
    path: "/cadastro",
    element: <RegisterHero />,
  },
  {
    path: "/editar",
    element: <EditHero />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HeroProvider>
      <RouterProvider router={router} />
    </HeroProvider>
  </React.StrictMode>
);
