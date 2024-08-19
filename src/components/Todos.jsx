import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTodos } from "../api/Todos";
import { useLoaderData } from "react-router-dom";

function Todos() {
  const todos = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            className={todo.completed === true ? "strike-through" : ""}
            key={todo.id}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getTodos("todos", { signal });
}

export const todosRoutes = {
  loader,
  element: <Todos />,
};
