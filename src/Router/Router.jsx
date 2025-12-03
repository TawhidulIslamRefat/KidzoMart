import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loading from "../Components/Loading/Loading";
import AuthLayout from "../Layout/AuthLayout";
import PrivetRoute from "../Provider/Private/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Notification from "../Components/Notification/Notification";
import ProductCard from "../Components/ProductCard/ProductCard";
import AllItems from "../Components/AllItems/AllItems";
import AboutUs from "../Pages/About/AboutUs";
import ContactPage from "../Pages/Contact/ContactPage";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import FAQ from "../Pages/FAQ/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/product.json"),
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/all-items",
        element: <AllItems></AllItems>,
      },
      {
        path: "/my-order",
        element: (
          <PrivetRoute>
            <MyOrder></MyOrder>
          </PrivetRoute>
        ),
      },
      {
        path: "/top-product",
        element: <ProductCard></ProductCard>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/top-product",
        element: <ProductCard></ProductCard>,
      },
      {
        path: "/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forget-password",
        Component: ForgetPassword,
      },
    ],
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails></ProductDetails>,
    loader: () => fetch("/Toys.json"),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
