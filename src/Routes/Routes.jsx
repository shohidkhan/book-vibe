import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Books from "../Pages/Books/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/book",

        Component: Books,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
