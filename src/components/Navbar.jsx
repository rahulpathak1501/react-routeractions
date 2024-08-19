import React from "react";
import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from "react-router-dom";

export default function Navbar() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      <nav className="top-nav">
        <div className="logo">MyNav</div>
        <div className="nav-list">
          <Link to="posts">Posts</Link>
          <Link to="users">Users</Link>
          <Link to="todos">Todos</Link>
        </div>
      </nav>
      {isLoading && <div className="loading-spinner"></div>}
      <ScrollRestoration />
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
