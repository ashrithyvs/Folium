import { useState } from "react";

export default function Education(props) {
  const [educationListItem, seteducationListItem] = useState("");
  const { state, setState } = props;
  const [educationList, seteducationList] = useState(state.education);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, education: educationList }));
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const handleEducationCount = () => {
    console.log(state.education);
    seteducationList((prev) => [
      ...prev,
      {
        id: educationList.length + 1,
        educationField: educationListItem,
        desc: "",
        cgpa: 0,
        instituition: "",
        from: "",
        to: "",
      },
    ]);

    seteducationListItem("");
  };
  const educationListHandleChange = (idx, field) => (e) => {
    let newArr = [...educationList];
    newArr[idx - 1][e.target.name] = e.target.value;
    seteducationList(newArr);
  };
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex space-x-3">
        <input
          className="custom-input"
          placeholder="Enter Education Title"
          value={educationListItem}
          onChange={(e) => {
            seteducationListItem(e.target.value);
          }}
        />
        <button className="custom-btn px-4" onClick={handleEducationCount}>
          Done
        </button>
      </div>
      <div className="flex flex-col space-y-6">
        {educationList.length !== 0 &&
          educationList.map((item, idx) => {
            if (!item._id) {
              return (
                <div key={idx} className="flex flex-col my-2 space-y-2">
                  <h4 className="text-base">{item.educationField}</h4>
                  <input
                    placeholder="Instituition/University"
                    name="instituition"
                    onChange={educationListHandleChange(
                      item.id,
                      "instituition"
                    )}
                    value={item.instituition}
                    className="custom-input"
                  />
                  <input
                    placeholder="Description"
                    onChange={educationListHandleChange(item.id, "desc")}
                    name="desc"
                    value={item.desc}
                    className="custom-input"
                  />
                  <input
                    type="number"
                    placeholder="CGPA"
                    onChange={educationListHandleChange(item.id, "cgpa")}
                    name="cgpa"
                    value={item.cgpa}
                    className="custom-input"
                  />
                  <input
                    type="number"
                    placeholder="From"
                    onChange={educationListHandleChange(item.id, "from")}
                    name="from"
                    value={item.from}
                    className="custom-input"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    onChange={educationListHandleChange(item.id, "to")}
                    name="to"
                    value={item.to}
                    className="custom-input"
                  />
                </div>
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
