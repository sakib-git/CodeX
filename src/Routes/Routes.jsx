import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children : [
      {
        index: true,
        element:<Home></Home>
      }
    ],
  
  },
  {
    path: '/',
    element:<AuthLayout></AuthLayout>,
    children: [
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
]);