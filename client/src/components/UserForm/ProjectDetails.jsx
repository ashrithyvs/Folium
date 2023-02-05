import { useState } from "react";

export const ProjectDetails = (props) => {
  const [projectsListItem, setprojectsListItem] = useState("");
  const { state, setState } = props;
  const [projectsList, setprojectsList] = useState(state.projects);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, projects: projectsList }));
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleProjectsCount = () => {
    console.log(projectsList);
    setprojectsList((prev) => [
      ...prev,
      {
        id: projectsList.length + 1,
        title: projectsListItem,
        desc: "",
        url: "",
        imageUrl: "",
        tech: "",
        from: "",
        to: "",
      },
    ]);

    setprojectsListItem("");
  };
  const projectsListHandleChange = (idx, field) => (e) => {
    let newArr = [...projectsList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setprojectsList(newArr);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <input
            className="custom-input"
            placeholder="Project Title"
            value={projectsListItem}
            onChange={(e) => {
              setprojectsListItem(e.target.value);
            }}
          />
          <button className="custom-btn px-4" onClick={handleProjectsCount}>
            Done
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {projectsList &&
            projectsList.length !== 0 &&
            projectsList.map((item, idx) => {
              if (!item._id) {
                return (
                  <div key={idx} className="flex flex-col my-2 space-y-2">
                    <h4 className="text-base">{item.title}</h4>
                    <input
                      placeholder="Project Title"
                      onChange={projectsListHandleChange(item.id, "title")}
                      name="title"
                      value={item.title}
                      className="custom-input"
                    />{" "}
                    <input
                      placeholder="Description"
                      onChange={projectsListHandleChange(item.id, "desc")}
                      name="desc"
                      value={item.desc}
                      className="custom-input"
                    />
                    {/* <input
                      placeholder="Affliation"
                      name="aff"
                      onChange={projectsListHandleChange(item.id, "aff")}
                      value={item.aff}
                      className="custom-input"
                    /> */}
                    <input
                      placeholder="Project URL"
                      name="url"
                      onChange={projectsListHandleChange(item.id, "url")}
                      value={item.url}
                      className="custom-input"
                    />{" "}
                    <input
                      placeholder="Image URL"
                      name="imageUrl"
                      onChange={projectsListHandleChange(item.id, "imageUrl")}
                      value={item.imageUrl}
                      className="custom-input"
                    />
                    <input
                      placeholder="Technologies used"
                      onChange={projectsListHandleChange(item.id, "tech")}
                      name="tech"
                      value={item.tech}
                      className="custom-input"
                    />
                    <div className="w-full flex space-x-4">
                      <input
                        type="number"
                        placeholder="From"
                        onChange={projectsListHandleChange(item.id, "from")}
                        name="from"
                        value={item.from}
                        className="custom-input w-1/2"
                      />
                      <input
                        type="number"
                        placeholder="To"
                        onChange={projectsListHandleChange(item.id, "to")}
                        name="to"
                        value={item.to}
                        className="custom-input w-1/2"
                      />
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
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
