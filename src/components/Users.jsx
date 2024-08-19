import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";

function Users() {
  const users = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <label htmlFor="company-name">{user.company.name}</label>
              <br />
              <label htmlFor="website">{user.website}</label>
              <br />
              <label htmlFor="email">{user.email}</label>
              <br />
            </div>
            <div className="card-footer">
              <Link to={user.id} className="btn">
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
  return getUsers("users", { signal });
}

export const usersListRoutes = {
  loader,
  element: <Users />,
};
