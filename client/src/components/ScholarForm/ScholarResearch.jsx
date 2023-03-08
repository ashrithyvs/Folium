import { useState } from "react";

export const ResearchDetails = (props) => {
  const [researchesListItem, setresearchesListItem] = useState("");
  const { state, setState } = props;
  const [researchesList, setresearchesList] = useState(state.researches);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, researches: researchesList }));
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleresearchesCount = () => {
    setresearchesList((prev) => [
      ...prev,
      {
        id: researchesList.length + 1,
        title: researchesListItem,
        desc: "",
      },
    ]);

    setresearchesListItem("");
  };
  const researchesListHandleChange = (idx) => (e) => {
    let newArr = [...researchesList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setresearchesList(newArr);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <input
            className="custom-input"
            placeholder="Research Title"
            value={researchesListItem}
            onChange={(e) => {
              setresearchesListItem(e.target.value);
            }}
          />
          <button className="custom-btn px-4" onClick={handleresearchesCount}>
            Done
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {researchesList &&
            researchesList.length !== 0 &&
            researchesList.map((item, idx) => {
              if (!item._id) {
                return (
                  <div key={idx} className="flex flex-col my-2 space-y-2">
                    <h4 className="text-base">{item.title}</h4>
                    <input
                      placeholder="Research Title"
                      onChange={researchesListHandleChange(item.id)}
                      name="title"
                      value={item.title}
                      className="custom-input"
                    />{" "}
                    <input
                      placeholder="Description"
                      onChange={researchesListHandleChange(item.id)}
                      name="desc"
                      value={item.desc}
                      className="custom-input"
                    />
                    {/* <div className="w-full flex space-x-4">
                      <input
                        type="number"
                        placeholder="From"
                        onChange={researchesListHandleChange(item.id, "from")}
                        name="from"
                        value={item.from}
                        className="custom-input w-1/2"
                      />
                      <input
                        type="number"
                        placeholder="To"
                        onChange={researchesListHandleChange(item.id, "to")}
                        name="to"
                        value={item.to}
                        className="custom-input w-1/2"
                      />
                    </div> */}
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

export default ResearchDetails;
