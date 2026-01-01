import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../pages/Register/Register";
import AuthPrivate from "../Context/AuthPrivate";

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
        element:<AuthPrivate>
          <Login></Login>
        </AuthPrivate>
      },
      {
        path:'/register',
        element:<AuthPrivate>
          <Register></Register>
        </AuthPrivate>
      }
    ]
  }
]);