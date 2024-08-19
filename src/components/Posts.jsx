import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/Posts";

function Posts() {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer">
              <Link className="btn" to={`${post.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getPosts("posts", { signal });
  // axios
  //   .get("http://localhost:3000/posts", { signal })
  //   .then((res) => res.data);
}

export const postsListRoutes = {
  loader,
  element: <Posts />,
};
