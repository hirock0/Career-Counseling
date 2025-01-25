import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import App from "../App";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import Details from "../pages/Details/Details";
import PublicRoute from "./PublicRoute";
import ForgotPassword from "../pages/ForgotPasword/ForgotPassword";
import Specialists from "../pages/Specialists/Specialists";
import Specialist_details from "../pages/Specialist_details/Specialist_details";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/details/:id",
          element: (
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          ),
        },
        {
          path: "/specialists",
          element: <Specialists />,
        },
        {
          path: "/specialist_details/:id",
          element: (
            <PrivateRoute>
              <Specialist_details />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      ),
    },
    {
      path: "/forgot_password",
      element: (
        <PublicRoute>
          <ForgotPassword />
        </PublicRoute>
      ),
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
    },
  }
);
