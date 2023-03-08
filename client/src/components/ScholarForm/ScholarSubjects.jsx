import { useState } from "react";

export default function Subjects(props) {
  const [SubjectsListItem, setSubjectsListItem] = useState("");
  const { state, setState } = props;
  const [SubjectsList, setSubjectsList] = useState(state.subjects || []);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, subjects: SubjectsList }));
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const handleSubjectCount = () => {
    setSubjectsList((prev) => [
      ...prev,
      {
        id: SubjectsList.length + 1,
        SubjectField: SubjectsListItem,
        mastery: 0,
        exp: 0,
      },
    ]);

    setSubjectsListItem("");
  };
  const SubjectsListHandleChange = (idx, field) => (e) => {
    let newArr = [...SubjectsList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setSubjectsList(newArr);
  };
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-3">
        <input
          className="custom-input"
          placeholder="Enter Subject Title"
          value={SubjectsListItem}
          onChange={(e) => {
            setSubjectsListItem(e.target.value);
          }}
        />
        <button className="custom-btn px-4" onClick={handleSubjectCount}>
          Done
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {SubjectsList &&
          SubjectsList.length !== 0 &&
          SubjectsList.map((item, idx) => {
            if (!item._id) {
              return (
                <div key={idx} className="flex flex-col my-3 space-y-2">
                  <h4 className="text-base">{item.SubjectField}</h4>
                  <input
                    placeholder="Subject"
                    onChange={SubjectsListHandleChange(item.id, "SubjectField")}
                    value={item.SubjectField}
                    name="SubjectField"
                    className="custom-input"
                  />
                  <input
                    placeholder="Mastery in %"
                    onChange={SubjectsListHandleChange(item.id, "mastery")}
                    value={item.mastery}
                    name="mastery"
                    className="custom-input"
                  />
                  <input
                    placeholder="Yrs of Experience"
                    onChange={SubjectsListHandleChange(item.id, "exp")}
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
