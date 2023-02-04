import { useState } from "react";

export const ProjectDetails = (props) => {
  const [projectsCount, setProjectsCount] = useState();
  const [showFields, setShowFields] = useState(false);
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleProjectCount = () => {
    if (projectsCount !== undefined) {
      let temp = Array.from({ length: projectsCount }).map(() => {
        return { title: "", desc: "", url: "", img: "" };
      });
      setState((prev) => ({ ...prev, projects: temp }));
      setShowFields(true);
    } else setProjectsCount(0);
  };

  const { state, handleChange, projectsHandleChange, setState } = props;
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        {/* <div className="flex space-x-3">
          <input
            type="number"
            className="custom-input"
            placeholder="Enter Projects Count"
            value={projectsCount}
            onChange={(e) => {
              setProjectsCount(
                e.target.value !== undefined ? e.target.value : 0
              );
            }}
          />
          <button className="custom-btn px-4" onClick={handleProjectCount}>
            Done
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {projectsCount !== 0 &&
            projectsCount !== undefined &&
            showFields &&
            Object.entries(state.projects).map((item, idx) => {
              return (
                <div key={idx} className="flex flex-col my-2 space-y-2">
                  <h4 className="text-base"> {`Project ${idx + 1}:`}</h4>
                  <input
                    placeholder={`Project ${idx + 1} Title`}
                    onChange={projectsHandleChange(idx, "title")}
                    value={state.projects[idx].title}
                    className="custom-input"
                  />
                  <input
                    placeholder={`Project ${idx + 1} Description`}
                    onChange={projectsHandleChange(idx, "desc")}
                    value={state.projects[idx].desc}
                    className="custom-input"
                  />
                  <input
                    placeholder={`Project ${idx + 1} URL`}
                    onChange={projectsHandleChange(idx, "Url")}
                    value={state.projects[idx].url}
                    className="custom-input"
                  />
                  <input
                    placeholder={`Project ${idx + 1} Image`}
                    onChange={projectsHandleChange(idx, "img")}
                    value={state.projects[idx].img}
                    className="custom-input"
                  />
                </div>
              );
            })}
        </div> */}
        <input
          placeholder="Project One Title"
          onChange={handleChange("projectOneTitle")}
          defaultValue={state.projectOneTitle}
          className="custom-input"
        />
        <input
          placeholder="Project One Description"
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
          placeholder="Project Two Description"
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
          placeholder="Project Three Description"
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
