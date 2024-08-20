import { createBrowserRouter } from "react-router-dom";
import { todosRoutes } from "./components/Todos";

export const router = createBrowserRouter([
  {
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
