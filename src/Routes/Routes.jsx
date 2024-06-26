import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from '../Pages/Root/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/Home';
import Contact from './../Pages/Contact/Contact';
import SignIn from '../Pages/Sign In/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Events from './../Pages/Events/Events';
import OurStories from './../Pages/AboutUs/OurStories';
import FeaturedBooks from '../Pages/FeaturedBooks/FeaturedBooks';
import PrivateRoute from '../Private Route/PrivateRoute';
import Dashboard from '../Pages/Dashboard/Dashboard';
import AddEvents from '../Pages/AddEvents/AddEvents';
import AddFeaturedBooks from '../Pages/AdminAccessed/AddFeaturedBooks/AddFeaturedBooks';
import SingleEvent from '../Pages/SingleEvent/SingleEvent';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/event",
          element: <Events></Events>,
        },
        {
          path: "/story",
          element: <OurStories></OurStories>,
        },
        {
          path: "/books",
          element: <FeaturedBooks></FeaturedBooks>,
        },
        {
          path: "/event/:id",
          element: <SingleEvent></SingleEvent>,
        },
        {
          path: "/dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        },
        {
          path: "/add-event",
          element: <PrivateRoute><AddEvents></AddEvents></PrivateRoute>,
        },
        {
          path: "/add-featured-book",
          element: <PrivateRoute><AddFeaturedBooks></AddFeaturedBooks></PrivateRoute>,
        },

        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/sign-in",
          element: <SignIn></SignIn>,
        },
        {
          path: "/sign-up",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);

export default router;