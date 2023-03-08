import { useState } from "react";

export const AwardDetails = (props) => {
  const [awardsListItem, setawardsListItem] = useState("");
  const { state, setState } = props;
  const [awardsList, setawardsList] = useState(state.awards);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, awards: awardsList }));
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handleAwardsCount = () => {
    setawardsList((prev) => [
      ...prev,
      {
        id: awardsList.length + 1,
        name: awardsListItem,
        agency: "",
        year: "",
      },
    ]);

    setawardsListItem("");
  };
  const awardsListHandleChange = (idx) => (e) => {
    let newArr = [...awardsList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setawardsList(newArr);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <input
            className="custom-input"
            placeholder="Award Title"
            value={awardsListItem}
            onChange={(e) => {
              setawardsListItem(e.target.value);
            }}
          />
          <button className="custom-btn px-4" onClick={handleAwardsCount}>
            Done
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {awardsList &&
            awardsList.length !== 0 &&
            awardsList.map((item, idx) => {
              if (!item._id) {
                return (
                  <div key={idx} className="flex flex-col my-2 space-y-2">
                    <h4 className="text-base">{item.title}</h4>
                    <input
                      placeholder="Award Name"
                      onChange={awardsListHandleChange(item.id)}
                      name="name"
                      value={item.name}
                      className="custom-input"
                    />{" "}
                    <input
                      placeholder="Awarding Agency"
                      onChange={awardsListHandleChange(item.id)}
                      name="agency"
                      value={item.agency}
                      className="custom-input"
                    />
                    <input
                      placeholder="Year of Award"
                      name="year"
                      onChange={awardsListHandleChange(item.id)}
                      type="number"
                      value={item.year}
                      className="custom-input"
                    />{" "}
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

export default AwardDetails;
