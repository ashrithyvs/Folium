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
    <div className="w-2/3 min-h-[80vh] flex flex-col justify-center items-center mx-auto">
      <div className="w-full text-center">
        <h2 className="text-center">
          Hello {firstName.firstName} {lastName.lastName}!
        </h2>
        <h5>It's a good day to design your portfolio</h5>
      </div>
      <Dashboard />
    </div>
  );
}
