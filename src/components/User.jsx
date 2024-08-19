import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getSingleUser } from "../api/users";

function User() {
  const { userId } = useParams();

  const userDetails = useLoaderData();
  const [postDetails, setPostDetails] = useState([]);
  const [userTodoDetails, setUserTodoDetails] = useState([]);

  useEffect(() => {
    // const fecthUserDetails = async () => {
    //   const response = await axios.get(`http://localhost:3000/users/${userId}`);
    //   setUserDetails(response.data);
    //   //   console.log(response.data);
    // };
    const fecthUserPostDetails = async () => {
      const response = await axios.get(
        `http://localhost:3000/posts?userId=${userId}`
      );
      setPostDetails(response.data);
      //   console.log(response.data);
    };
    const fecthUserTodoDetails = async () => {
      const response = await axios.get(
        `http://localhost:3000/todos?userId=${userId}`
      );
      setUserTodoDetails(response.data);
      //   console.log(response.data);
    };
    // fecthUserDetails();
    fecthUserPostDetails();
    fecthUserTodoDetails();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">{userDetails?.name}</h1>
      <div className="page-subtitle">{userDetails?.email}</div>
      <div>
        <b>Company:</b> {userDetails?.company?.name}
      </div>
      <div>
        <b>Website:</b> {userDetails?.website}
      </div>
      <div>
        <b>Address:</b> {userDetails?.address?.street}{" "}
        {userDetails?.address?.suite}, {userDetails?.address?.city},{" "}
        {userDetails?.address?.zipcode}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {postDetails &&
          postDetails.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={`/posts/${post.id}`}>
                  View
                </Link>
              </div>
            </div>
          ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {userTodoDetails &&
          userTodoDetails.map((todo) => (
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

function loader({ params, request: { signal } }) {
  return getSingleUser(`${params.userId}`, { signal });
}

export const userRoutes = {
  loader,
  element: <User />,
};
