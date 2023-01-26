import React, { useEffect, useState } from "react";
import "./MainProfile.css";
import { home } from "../utils/api.js";
import Dashboard from "../components/Dashboard";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  return (
    <div>
      <div className="container min-h-[80vh]">
        <div className=" text-center mt-5">
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
}
