import React, { useEffect, useState } from "react";
import "./MainProfile.css";
import { home } from "../utils/api.js";
import Dashboard from "../components/Dashboard";
import Nav from "../components/Navbar";
import Navbar from "../components/Navbar";

export default () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [navbar, SetNavbar] = useState(Nav);
  const userInfo = window.localStorage.user;

  useEffect(() => {
    home()
      .then((res) => {
        // console.log(res);
        const { firstName, lastName } = res;
        setFirstName({ firstName });
        setLastName({ lastName });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // console.log(res);
    if (userInfo != undefined) {
      SetNavbar(Navbar);
    } else return;
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container" id="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h2 className="text-center">
              Hello {firstName.firstName} {lastName.lastName}
            </h2>
            <h5>It's a good day to design your portfolio</h5>
          </div>
        </div>
        <Dashboard />
      </div>
    </div>
  );
};
