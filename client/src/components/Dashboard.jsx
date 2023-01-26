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
    <div>
      <div style={{ textAlign: "center" }}>
        <h1> Select the level of portfolio customization below </h1>
      </div>
      <UserForm />
      <div className="MyCard50 img12">
        <Card onClick={() => toggleModal("portfolioDetailsModal")}>
          Template Design
        </Card>
      </div>
      {}
      {/* <div className="MyCard50 img11">
        <Card onClick={handleClickTwo}>Custom Design</Card>
      </div> */}
    </div>
  );
}

export default Dashboard;
