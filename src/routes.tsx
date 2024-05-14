import { Navigate, createBrowserRouter } from "react-router-dom";
import Private from "./pages/Private/Private";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Links from "./pages/Links/Links";
import Profile from "./pages/Profile/Profile";

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
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

export default routes;
