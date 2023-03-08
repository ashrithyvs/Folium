import { useState } from "react";

export const PatentDetails = (props) => {
  const [patentsListItem, setpatentsListItem] = useState("");
  const { state, setState } = props;
  const [patentsList, setpatentsList] = useState(state.patents);
  const cont = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, patents: patentsList }));
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const handlePatentsCount = () => {
    setpatentsList((prev) => [
      ...prev,
      {
        id: patentsList.length + 1,
        title: patentsListItem,
        inventors: "",
        appNum: "",
        date: "",
        status: "",
      },
    ]);

    setpatentsListItem("");
  };
  const patentsListHandleChange = (idx) => (e) => {
    let newArr = [...patentsList];
    newArr[idx - 1][e.target.name] = e.target.value;
    setpatentsList(newArr);
  };

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3">
          <input
            className="custom-input"
            placeholder="Patent Title"
            value={patentsListItem}
            onChange={(e) => {
              setpatentsListItem(e.target.value);
            }}
          />
          <button className="custom-btn px-4" onClick={handlePatentsCount}>
            Done
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          {patentsList &&
            patentsList.length !== 0 &&
            patentsList.map((item, idx) => {
              if (!item._id) {
                return (
                  <div key={idx} className="flex flex-col my-2 space-y-2">
                    <h4 className="text-base">{item.title}</h4>
                    <input
                      placeholder="Patent Title"
                      onChange={patentsListHandleChange(item.id)}
                      name="title"
                      value={item.title}
                      className="custom-input"
                    />{" "}
                    <input
                      placeholder="Inventors"
                      onChange={patentsListHandleChange(item.id)}
                      name="inventors"
                      value={item.inventors}
                      className="custom-input"
                    />
                    <input
                      placeholder="Application Number"
                      name="appNum"
                      onChange={patentsListHandleChange(item.id)}
                      type="number"
                      value={item.appNum}
                      className="custom-input"
                    />{" "}
                    <input
                      placeholder="Date"
                      name="date"
                      onChange={patentsListHandleChange(item.id)}
                      type="number"
                      value={item.date}
                      className="custom-input"
                    />
                    <input
                      placeholder="Status"
                      onChange={patentsListHandleChange(item.id)}
                      name="status"
                      value={item.status}
                      className="custom-input"
                    />{" "}
                    {/* <div className="w-full flex space-x-4">
                      <input
                        type="number"
                        placeholder="From"
                        onChange={patentsListHandleChange(item.id, "from")}
                        name="from"
                        value={item.from}
                        className="custom-input w-1/2"
                      />
                      <input
                        type="number"
                        placeholder="To"
                        onChange={patentsListHandleChange(item.id, "to")}
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

export default PatentDetails;
