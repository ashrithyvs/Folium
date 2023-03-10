import { profile } from "../../utils/api.js";

export const Confirm = (props) => {
  const {
    state: {
      navColor,
      navText,
      navImage,
      introText,
      introTitle,
      bio,
      aboutBgColor,
      profileImage,
      resumeUrl,
      githubLink,
      linkdin,
      footer,
      experience,
      education,
      skills,
      projects,
    },
  } = props;
  const cont = (e) => {
    e.preventDefault();
    const newUser = {
      navColor: navColor,
      navText: navText,
      navImage: navImage,
      introText: introText,
      introTitle: introTitle,
      bio: bio,
      aboutBgColor: aboutBgColor,
      profileImage: profileImage,
      resumeUrl: resumeUrl,
      githubLink: githubLink,
      linkdin: linkdin,
      footer: footer,
      education: education,
      experience: experience,
      skills: skills,
      projects: projects,
    };
    console.log("from confirm page front end", newUser);
    profile(newUser)
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
            item !== "skills" &&
            item !== "date"
          ) {
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
