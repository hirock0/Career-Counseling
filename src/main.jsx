import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContextApi from "./ContextApi/ContextApi.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApi>
      <HelmetProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
        <ToastContainer autoClose={1000} position="top-center" />
      </HelmetProvider>
    </ContextApi>
  </StrictMode>
);
