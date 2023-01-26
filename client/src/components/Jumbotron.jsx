import React from "react";
import { useHistory } from "react-router-dom";

function Jumbrotron(props) {
  let history = useHistory();
  // console.log(props);

  function handleClick() {
    return history.push("/login");
  }
  return (
    <div className="bg-transparent flex flex-col text-left min-h-[90vh] justify-center">
      <h4 className="text-5xl">Psst...!</h4>
      <div className="mt-6">
        <h4>
          Want a free Portfolio website to showcase your projects, experience in
          a aesthetic way?
        </h4>
        <h4>What are you waiting for? Login to get started!</h4>
      </div>
    </div>
  );
}

export default Jumbrotron;
