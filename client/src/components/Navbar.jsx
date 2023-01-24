import React from "react";
import { Nav } from "react-bootstrap";
import { logout } from "../utils/api";

export default function Navbar() {
  const userInfo = window.localStorage.user;
  return (
    <div className="flex justify-between items-center px-6 py-3 w-3/4 mx-auto text-white">
      <h3 className="text-white mb-0">Folium</h3>
      {userInfo ? (
        <div className="flex space-x-6 mx-6 font-semibold text-base">
          <Nav.Link
            style={{ color: "white" }}
            href="/mainprofile"
            activeclassname="active"
          >
            Profile
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/" onClick={logout}>
            Log Out
          </Nav.Link>
        </div>
      ) : (
        <div className="flex space-x-6 mx-6 font-semibold text-base">
          <Nav.Link style={{ color: "white" }} href="/login">
            Log In
          </Nav.Link>
          <Nav.Link href="/register" style={{ color: "white" }}>
            Sign Up
          </Nav.Link>
        </div>
      )}
    </div>
  );
}
