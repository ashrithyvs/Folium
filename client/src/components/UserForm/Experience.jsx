import { useState } from "react";

export default function Experience(props) {
  const [experienceListItem, setexperienceListItem] = useState("");
  const { state, setState } = props;
  const [experienceList, setexperienceList] = useState(state.experience || []);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, experience: experienceList }));
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const handleExperienceCount = () => {
    setexperienceList((prev) => [
      ...prev,
      {
        id: experienceList.length + 1,
        experienceField: experienceListItem,
        desc: "",
        org: "",
        from: "",
        to: "",
      },
    ]);

    setexperienceListItem("");
  };
  const experienceListHandleChange = (idx, field) => (e) => {
    let newArr = [...experienceList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setexperienceList(newArr);
  };
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-3">
        <input
          className="custom-input"
          placeholder="Enter Experience Title"
          value={experienceListItem}
          onChange={(e) => {
            setexperienceListItem(e.target.value);
          }}
        />
        <button className="custom-btn px-4" onClick={handleExperienceCount}>
          Done
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {experienceList &&
          experienceList.length !== 0 &&
          experienceList.map((item, idx) => {
            if (!item._id) {
              return (
                <div key={idx} className="flex flex-col my-3 space-y-2">
                  <h4 className="text-base">{item.experienceField}</h4>
                  <input
                    placeholder="Experience Field"
                    onChange={experienceListHandleChange(
                      item.id,
                      "experienceField"
                    )}
                    value={item.experienceField}
                    name="experienceField"
                    className="custom-input"
                  />{" "}
                  <input
                    placeholder="Company/Organization"
                    onChange={experienceListHandleChange(item.id, "org")}
                    value={item.org}
                    name="org"
                    className="custom-input"
                  />
                  <input
                    placeholder="Description"
                    onChange={experienceListHandleChange(item.id, "desc")}
                    value={item.desc}
                    name="desc"
                    className="custom-input"
                  />
                  <input
                    type="number"
                    placeholder="From"
                    onChange={experienceListHandleChange(item.id, "from")}
                    value={item.from}
                    name="from"
                    className="custom-input"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    onChange={experienceListHandleChange(item.id, "to")}
                    name="to"
                    value={item.to}
                    className="custom-input"
                  />
                </div>
              );
            } else return null;
          })}
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
}
