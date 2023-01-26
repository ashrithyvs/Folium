export default function AboutMeDetails(props) {
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
    <div className="flex flex-col space-y-6">
      <input
        className="custom-input"
        placeholder="Enter Text For Introduction"
        onChange={handleChange("introText")}
        value={state.introText}
      />
      <input
        className="custom-input"
        placeholder="Enter Text Introduction Title"
        onChange={handleChange("introTitle")}
        defaultValue={state.introTitle}
      />
      <input
        placeholder="Enter Text For About Me Section"
        onChange={handleChange("bio")}
        className="custom-input"
        defaultValue={state.bio}
      />
      <select
        placeholder="Background Color For About Me Page"
        onChange={handleChange("aboutBgColor")}
        className="custom-input"
        defaultValue={state.aboutBgColor}
      >
        <option value="#A9A8A5">Silver Chalice</option>
        <option value="#821717">Crimson Red</option>
        <option value="#11306A">Royal Blue Dark</option>
        <option value="#FAE779">Yellow Crayola</option>
        <option value="#2A2C2E">Jet Black</option>
      </select>
      <input
        placeholder="Profile Image"
        onChange={handleChange("profileImage")}
        className="custom-input"
        defaultValue={state.profileImage}
      />
      <input
        placeholder="Enter Your Resume Link"
        onChange={handleChange("resumeUrl")}
        defaultValue={state.resumeUrl}
        className="custom-input"
      />
      <input
        placeholder="Enter Your GitHub Link"
        onChange={handleChange("githubLink")}
        className="custom-input"
        defaultValue={state.githubLink}
      />
      <input
        placeholder="Enter Your LinkedIn Link"
        onChange={handleChange("linkdin")}
        className="custom-input"
        defaultValue={state.linkdin}
      />
      <input
        placeholder="Enter Text For Footer"
        onChange={handleChange("footer")}
        className="custom-input"
        defaultValue={state.footer}
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
}
