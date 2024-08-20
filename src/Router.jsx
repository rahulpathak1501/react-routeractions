import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { todosRoutes } from "./components/Todos";
import Navbar from "./components/Navbar";

export const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        errorElement: <h1>Error: Page not found</h1>,
        children: [{ path: "/todos", ...todosRoutes }],
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
