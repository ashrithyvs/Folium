export const NavBarDetails = (props) => {
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const { state, handleChange } = props;
  return (
    <div className="w-full  flex flex-col justify-center items-center space-y-6">
      <input
        placeholder="Portfolio Name"
        className="custom-input"
        onChange={handleChange("navText")}
        value={state.navText}
      />
      <select
        placeholder="Background Color for Navbar"
        onChange={handleChange("navColor")}
        className="custom-input"
        defaultValue="#2A2C2E"
      >
        {/* <option value="#A9A8A5">Silver Chalice</option> */}
        <option value="#2A2C2E">Jet Black</option>
        <option value="#821717">Crimson Red</option>
        <option value="#11306A">Royal Blue Dark</option>
        {/* <option value="#FAE779">Yellow Crayola</option> */}
      </select>
      <input
        placeholder="Background Image for Introduction/Hero component"
        onChange={handleChange("navImage")}
        className="custom-input"
        value={state.navImage}
      />
      <div className="flex justify-center space-x-4">
        <button className="custom-btn-outline max-w-min px-4" onClick={back}>
          Back
        </button>
        <button className="custom-btn-outline max-w-min px-4" onClick={cont}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default NavBarDetails;
