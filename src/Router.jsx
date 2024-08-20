import { Navigate, createBrowserRouter } from "react-router-dom";
import { todosRoutes } from "./components/Todos";
import { newTodoRoute } from "./components/NewTodo";
// import NewTodo from "./components/NewTodo";

export const router = createBrowserRouter([
  {
    children: [
      { path: "/todos", ...todosRoutes },
      { path: "/new", ...newTodoRoute },
      { path: "*", element: <Navigate to="/todos" /> },
    ],
    // children: [
    //   {
    //     errorElement: <h1>Error: Page not found</h1>,
    //     children: [
    //       { path: "/todos", ...todosRoutes },
    //       { path: "/new", ...newTodoRoute },
    //       { path: "*", element: <Navigate to="/todos" /> },
    //     ],
    //   },
    // ],
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
