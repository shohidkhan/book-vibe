import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

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
        path: "/listedBooks",
        loader: () => fetch("/data.json"),
        Component: ListedBooks,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/data.json"),
        Component: BookDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
