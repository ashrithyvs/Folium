export const NavBarDetails = (props) => {
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { state, handleChange } = props;
  return (
    <div className="w-full">
      <div className=" flex flex-col justify-center items-center space-y-6">
        <input
          placeholder="Text On Navbar"
          className="custom-input"
          onChange={handleChange("navText")}
          value={state.navText}
        />
        <select
          placeholder="Background Color"
          onChange={handleChange("navColor")}
          className="custom-input"
          value={state.navColor}
        >
          <option value="#A9A8A5">Silver Chalice</option>
          <option value="#821717">Crimson Red</option>
          <option value="#11306A">Royal Blue Dark</option>
          <option value="#FAE779">Yellow Crayola</option>
          <option value="#2A2C2E">Jet Black</option>
        </select>
        <input
          placeholder="Background Image for Navbar"
          onChange={handleChange("navImage")}
          className="custom-input"
          value={state.navImage}
        />
        <button
          className="custom-btn-outline max-w-min px-4 mx-auto"
          onClick={cont}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NavBarDetails;
