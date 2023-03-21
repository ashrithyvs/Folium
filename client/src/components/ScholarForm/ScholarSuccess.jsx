import { useEffect } from "react";
import { scholarProfile } from "../../utils/api";

export const Success = (props) => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("scholarDetailsModal").classList.toggle("hidden");
      props.history.push("/templates");
    }, 3000);
  }, []);
  return (
    <div className="text-center pt-6">
      <h1>Thank You For Your Submission</h1>
    </div>
  );
};

export default Success;
