import React from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { addTodos } from "../api/Todos";

function NewTodo() {
  const errorMassage = useActionData();
  const { state } = useNavigation();
  const isLoading = state === "loading" || state === "submitting";

  return (
    <>
      <div className="container">
        <h1 className="page-title">New Todo</h1>
        <Form method="post" action="/new" className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" />
            </div>
            <div className="form-btn-row form-row">
              <Link to=".." className="btn-outline btn">
                Back
              </Link>
              <button className="btn" disabled={isLoading}>
                {isLoading ? "Loading..." : "Create"}
              </button>
            </div>
          </div>
        </Form>
        {errorMassage ? <h3>{errorMassage}</h3> : ""}
      </div>
    </>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  if (title === "") {
    return "Title is required";
  }
  const newTodo = {
    title,
    completed: false,
  };
  await addTodos(newTodo);
  return redirect("/todos");
}

export const newTodoRoute = {
  action,
  element: <NewTodo />,
};
