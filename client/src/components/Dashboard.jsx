import { useState } from "react";
import Card from "./Card/Card";
import UserForm from "./UserForm";
function Dashboard() {
  function handleClickOne() {
    // return history.push("/userform");
  }
  // function handleClickTwo() {
  //   return history.push("/customtemplate");
  // }

  function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    // document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    // document.getElementById(modalID).classList.toggle("flex");
    // document.getElementById(modalID + "-backdrop").classList.toggle("flex");
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* <h1> Select the level of portfolio customization below </h1> */}
      <UserForm />
      <button
        className="custom-btn-outline bg-[#111827]"
        onClick={() => toggleModal("portfolioDetailsModal")}
      >
        Template Design
      </button>
      {/* <div className="MyCard50 img11">
        <Card onClick={handleClickTwo}>Custom Design</Card>
      </div> */}
    </div>
  );
}

export default Dashboard;
