import { useEffect } from "react";

export const Success = (props) => {
  useEffect(() => {
    setTimeout(() => {
      document
        .getElementById("portfolioDetailsModal")
        .classList.toggle("hidden");
      props.history.push("/templates");
    }, 3000);
  }, []);
  return (
    <div className="text-center pt-6">
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions.</p>
    </div>
  );
};

export default Success;
