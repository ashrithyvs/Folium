import { useState } from "react";

export default function Skills(props) {
  const [SkillsListItem, setSkillsListItem] = useState("");
  const { state, setState } = props;
  const [SkillsList, setSkillsList] = useState(state.skills || []);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, skills: SkillsList }));
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const handleSkillCount = () => {
    setSkillsList((prev) => [
      ...prev,
      {
        id: SkillsList.length + 1,
        SkillField: SkillsListItem,
        mastery: 0,
        exp: 0,
      },
    ]);

    setSkillsListItem("");
  };
  const SkillsListHandleChange = (idx, field) => (e) => {
    let newArr = [...SkillsList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setSkillsList(newArr);
  };
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-3">
        <input
          className="custom-input"
          placeholder="Enter Skill Title"
          value={SkillsListItem}
          onChange={(e) => {
            setSkillsListItem(e.target.value);
          }}
        />
        <button className="custom-btn px-4" onClick={handleSkillCount}>
          Done
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {SkillsList &&
          SkillsList.length !== 0 &&
          SkillsList.map((item, idx) => {
            if (!item._id) {
              return (
                <div key={idx} className="flex flex-col my-3 space-y-2">
                  <h4 className="text-base">{item.SkillField}</h4>
                  <input
                    placeholder="Skill"
                    onChange={SkillsListHandleChange(item.id, "SkillField")}
                    value={item.SkillField}
                    name="SkillField"
                    className="custom-input"
                  />
                  <input
                    placeholder="Mastery in %"
                    onChange={SkillsListHandleChange(item.id, "mastery")}
                    value={item.mastery}
                    name="mastery"
                    className="custom-input"
                  />
                  <input
                    placeholder="Yrs of Experience"
                    onChange={SkillsListHandleChange(item.id, "exp")}
                    value={item.exp}
                    name="exp"
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
