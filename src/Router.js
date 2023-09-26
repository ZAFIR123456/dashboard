import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home"
import AllProjects from "./AllProjects";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/allprojects",
          element: <AllProjects />,
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default Router;
