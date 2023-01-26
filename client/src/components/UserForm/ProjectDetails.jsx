export const ProjectDetails = (props) => {
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
      <div className="flex flex-col space-y-2">
        <input
          placeholder="Project One Title"
          onChange={handleChange("projectOneTitle")}
          defaultValue={state.projectOneTitle}
          className="custom-input"
        />
        <input
          placeholder="Project One Text"
          onChange={handleChange("projectOneText")}
          defaultValue={state.projectOneText}
          className="custom-input"
        />
        <input
          placeholder="Project One Url"
          onChange={handleChange("projectOneUrl")}
          defaultValue={state.projectOneUrl}
          className="custom-input"
        />
        <input
          placeholder="projectOne Image"
          onChange={handleChange("projectOneImage")}
          defaultValue={state.projectOneImage}
          className="custom-input"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <input
          placeholder="Project Two Title"
          onChange={handleChange("projectTwoTitle")}
          defaultValue={state.projectTwoTitle}
          className="custom-input"
        />
        <input
          placeholder="Project Two Text"
          onChange={handleChange("projectTwoText")}
          defaultValue={state.projectTwoText}
          className="custom-input"
        />
        <input
          placeholder="Project Two Url"
          onChange={handleChange("projectTwoUrl")}
          defaultValue={state.projectTwoUrl}
          className="custom-input"
        />
        <input
          placeholder="projectTwo Image"
          onChange={handleChange("projectTwoImage")}
          defaultValue={state.projectTwoImage}
          className="custom-input"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <input
          placeholder="Project Three Title"
          onChange={handleChange("projectThreeTitle")}
          defaultValue={state.projectThreeTitle}
          className="custom-input"
        />
        <input
          placeholder="Project Three Text"
          onChange={handleChange("projectThreeText")}
          defaultValue={state.projectThreeText}
          className="custom-input"
        />
        <input
          placeholder="Project Three Url"
          onChange={handleChange("projectThreeUrl")}
          defaultValue={state.projectThreeUrl}
          className="custom-input"
        />
        <input
          placeholder="Project Three Image"
          onChange={handleChange("projectThreeImage")}
          defaultValue={state.projectThreeImage}
          className="custom-input"
        />
      </div>

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

export default ProjectDetails;
