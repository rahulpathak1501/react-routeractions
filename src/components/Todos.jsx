import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTodos } from "../api/Todos";
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";

function Todos() {
  const todos = useLoaderData();

  const { state } = useNavigation();

  const isLoading = state === "loading";
  // console.log(todos);

  return (
    <div className="container">
      <h1 className="page-title mb-2">
        Todos
        <div className="title-btns">
          <Link to="/new" className="btn">
            New
          </Link>
        </div>
      </h1>

      <Form action="" className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input type="search" name="query" id="query" />
          </div>
          <button className="btn">Search</button>
        </div>
      </Form>
      {isLoading ? (
        "Loading..."
      ) : (
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
      )}
    </div>
  );
}

function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query") || "";
  return getTodos(`/todos?q=${query}`);
  // return axios
  //   .get(`http://localhost:3000/todos?q=${query}`)
  //   .then((res) => res.data);
}

export const todosRoutes = {
  loader,
  element: <Todos />,
};
