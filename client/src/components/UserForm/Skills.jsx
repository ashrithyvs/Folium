import { useEffect, useState } from "react";

export default function Skills(props) {
  const [skillsCount, setSkillsCount] = useState([]);
  const [skillsListItem, setskillsListItem] = useState("");
  const [showFields, setShowFields] = useState(false);
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const handleSkillsCount = () => {
    console.log(skillsListItem);
    setSkillsCount((prev) => [...prev, skillsListItem]);
    setskillsListItem("");
    // setShowFields(true);
  };
  useEffect(() => {
    console.log(skillsCount);
    skillsHandleChange(skillsCount);
  }, [skillsCount]);
  const { state, setState, skillsHandleChange } = props;
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-3">
        <input
          className="custom-input"
          placeholder="Enter Skills Title"
          value={skillsListItem}
          onChange={(e) => {
            setskillsListItem(e.target.value);
          }}
        />
        <button className="custom-btn px-4" onClick={handleSkillsCount}>
          Done
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {skillsCount.length !== 0 &&
          skillsCount !== undefined &&
          showFields &&
          Object.entries(state.skills).map((item, idx) => {
            if (item[0] !== "_id") {
              return (
                <h4 key={idx} className="text-base">
                  {item[1]}
                </h4>
              );
            }
            return null;
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
