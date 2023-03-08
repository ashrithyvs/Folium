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
        placeholder="Introduction Title"
        onChange={handleChange("introTitle")}
        defaultValue={state.introTitle}
      />
      <input
        className="custom-input"
        placeholder="Introduction subTitle"
        onChange={handleChange("introText")}
        value={state.introText}
      />

      <input
        placeholder="Bio"
        onChange={handleChange("bio")}
        className="custom-input"
        defaultValue={state.bio}
      />
      <select
        placeholder="Background Color"
        onChange={handleChange("aboutBgColor")}
        className="custom-input"
        defaultValue="#2A2C2E"
      >
        <option value="#2A2C2E">Jet Black</option>
        <option value="#821717">Crimson Red</option>
        <option value="#11306A">Royal Blue Dark</option>
      </select>
      <input
        placeholder="Your photo"
        onChange={handleChange("profileImage")}
        className="custom-input"
        defaultValue={state.profileImage}
      />
      <input
        placeholder="Resume PDF Link"
        onChange={handleChange("resumeUrl")}
        defaultValue={state.resumeUrl}
        className="custom-input"
      />
      <input
        placeholder="GitHub Link"
        onChange={handleChange("githubLink")}
        className="custom-input"
        defaultValue={state.githubLink}
      />
      <input
        placeholder="LinkedIn Profile Link"
        onChange={handleChange("linkdin")}
        className="custom-input"
        defaultValue={state.linkdin}
      />
      <input
        placeholder="Footer Text"
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
