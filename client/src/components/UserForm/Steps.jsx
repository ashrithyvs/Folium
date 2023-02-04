export const Steps = (props) => {
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  return (
    <div className="w-full  flex flex-col justify-center items-center space-y-6">
      <div className="flex text-center flex-col space-y-4 my-4W">
        <h4 className="text-lg mb-0">Step 1 - Navbar Settings </h4>
        <h4 className="text-lg">Step 2 - About Settings </h4>
        <h4 className="text-lg">Step 3 - Projects Settings </h4>
        <h4 className="text-lg">Step 4 - Confirm </h4>
        <h4 className="text-lg">Step 5 - Success </h4>
      </div>
      <button
        className="custom-btn-outline max-w-min px-4 mx-auto"
        onClick={cont}
      >
        Continue
      </button>
    </div>
  );
};

export default Steps;
