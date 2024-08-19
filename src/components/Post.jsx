import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getComments, getSinglePost } from "../api/Posts";
import { getSingleUser } from "../api/users";

function Post() {
  const { postDetails, comments, user } = useLoaderData();
  // console.log(user);
  // const comments = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">{postDetails.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      {/* {console.log(postDetails.userId)} */}
      <div>{postDetails.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div className="card" key={comment.id}>
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function loader({ request: { signal }, params }) {
  const [postDetails, comments] = await Promise.all([
    getSinglePost(params.postId, { signal }),
    getComments(params.postId, { signal }),
  ]);
  const user = getSingleUser(postDetails.userId, { signal });

  return { postDetails, comments, user: await user };
}

export const postRoutes = {
  loader,
  element: <Post />,
};
