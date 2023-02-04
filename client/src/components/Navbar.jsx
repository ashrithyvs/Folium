import React from "react";
import { Nav } from "react-bootstrap";
import { logout } from "../utils/api";
import { Link } from "react-router-dom";
export default function Navbar() {
  const userInfo = window.localStorage.user;
  return (
    <div className="flex bg-[#111827] justify-between items-center px-[10vw] py-4 mx-auto sticky top-0 text-white">
      <Link style={{ color: "white" }} to="/" activeclassname="active">
        <h3 className="text-white mb-0 font-semibold tracking-widest text-4xl">
          Folium
        </h3>
      </Link>
      {userInfo ? (
        <div className="flex space-x-6 mx-6 font-semibold text-base">
          <Link style={{ color: "white" }} to="/" activeclassname="active">
            Dashboard
          </Link>
          <Link style={{ color: "white" }} to="/" onClick={logout}>
            Log Out
          </Link>
        </div>
      ) : (
        <div className="flex space-x-6 mx-6 font-semibold text-base">
          <Link style={{ color: "white" }} to="/login">
            Log In
          </Link>
          <Link to="/register" style={{ color: "white" }}>
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
