import App from "App";
import Layout from "components/Layout/Layout";
import Links from "pages/Links/Links";
import Login from "pages/Login/Login";
import Private from "pages/Private/Private";
import Profile from "pages/Profile/Profile";
import Register from "pages/Register/Register";
import { Navigate, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <Private />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/links",
            element: <Links />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/preview",
    element: <p>Preview</p>,
  },
  {
    path: "/test",
    element: <App />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

export default routes;
