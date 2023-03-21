import { scholar } from "../../utils/api.js";

export const Confirm = (props) => {
  const cont = (e) => {
    e.preventDefault();
    delete props.state["firstName"];
    delete props.state["lastName"];
    console.log("from confirm page front end", props.state);
    scholar(props.state)
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => console.log(err));

    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  return (
    <div className="flex flex-col space-y-6 pt-4 px-3">
      <div className="flex flex-col space-y-4">
        {Object.keys(props.state).map((item, i) => {
          if (
            item !== "firstName" &&
            item !== "lastName" &&
            item !== "projects" &&
            item !== "user" &&
            item !== "__v" &&
            item !== "_id" &&
            item !== "education" &&
            item !== "experience" &&
            item !== "awards" &&
            item !== "researches" &&
            item !== "patents" &&
            item !== "subjects" &&
            item !== "date"
          ) {
            console.log(item);
            return (
              <div
                key={i}
                className="flex max-w-full overflow-hidden justify-between"
              >
                <h4 className="text-xl">{item}</h4>
                <h4 className="text-base max-w-[50%]">{props.state[item]}</h4>
              </div>
            );
          }
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
      <br />
    </div>
  );
};

export default Confirm;
