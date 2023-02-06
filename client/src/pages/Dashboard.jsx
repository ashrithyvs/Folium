import React, { useEffect, useState } from "react";
import { home } from "../utils/api.js";
import UserForm from "../components/UserForm";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    home()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    // document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    // document.getElementById(modalID).classList.toggle("flex");
    // document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }

  return (
    <div className="w-2/3 min-h-[90vh] flex flex-col justify-center items-center mx-auto">
      <div className="w-full text-center">
        <h2 className="text-center">
          Hello {user.firstName} {user.lastName}!
        </h2>
        <h5>It's a good day to design your portfolio</h5>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* <h1> Select the level of portfolio customization below </h1> */}
        <UserForm />
        <div className="flex space-x-6">
          <button
            className="custom-btn-outline bg-[#111827]"
            onClick={() => toggleModal("portfolioDetailsModal")}
          >
            Let's Get Started!
          </button>
          <Link className="custom-btn-outline bg-[#111827]" to="/templates">
            Templates
          </Link>{" "}
          <Link className="custom-btn-outline bg-[#111827]" to="/scholar">
            Google Scholars
          </Link>
        </div>
        {/* <div className="MyCard50 img11">
        <Card onClick={handleClickTwo}>Custom Design</Card>
      </div> */}
      </div>
    </div>
  );
}
