// ./Router/router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import CreatePost from "../Pages/CreatePost/CreatePost";
import AllPost from "../Pages/AllPost/AllPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/posts",
        element: <AllPost />,
      },
    ],
  },
]);

export default router;
