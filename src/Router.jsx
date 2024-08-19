import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { postsListRoutes } from "./components/Posts";
import { usersListRoutes } from "./components/Users";
import { todosRoutes } from "./components/Todos";
import { postRoutes } from "./components/Post";
import Navbar from "./components/Navbar";
import { userRoutes } from "./components/User";

export const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        errorElement: <h1>Error: Page not found</h1>,
        children: [
          { path: "*", element: <h1>404 - Not Found</h1> },
          {
            path: "/posts",
            children: [
              { index: true, ...postsListRoutes },
              { path: ":postId", ...postRoutes },
            ],
          },

          {
            path: "/users",
            children: [
              { index: true, ...usersListRoutes },
              { path: ":userId", ...userRoutes },
            ],
          },

          { path: "/todos", ...todosRoutes },
        ],
      },
    ],
  },
]);

// function NavLink() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }
