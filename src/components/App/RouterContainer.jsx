import React from "react";
import "./style-colors.css";
import "./style.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "../../utils/ROUTES";

import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Layout/Home/Home";
import Products from "../Layout/Products/Products";
import AboutUs from "../Layout/AboutUs/AboutUs";
import Blog from "../Layout/Blog/Blog";
import Contacts from "../Layout/Contacts/Contacts";
import Questions from "../Layout/Questions/Questions";
import Terms from "../Layout/Terms/Terms";
import NotFound from "../Layout/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: ROUTES.products,
        element: <Products />,
      },
      {
        path: ROUTES.aboutUs,
        element: <AboutUs />,
      },
      {
        path: ROUTES.blog,
        element: <Blog />,
      },
      {
        path: ROUTES.contacts,
        element: <Contacts />,
      },
      {
        path: ROUTES.questions,
        element: <Questions />,
      },
      {
        path: ROUTES.terms,
        element: <Terms />,
      },
    ],
  },
]);

const RouterContainer = () => {
  return <RouterProvider router={router} />;
};

export default RouterContainer;
