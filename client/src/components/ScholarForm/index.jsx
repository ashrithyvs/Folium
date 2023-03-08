import React, { useEffect, useState } from "react";
import NavBarDetails from "./ScholarNavBarDetails";
import AboutMeDetails from "./ScholarAboutMeDetails";
import ProjectDetails from "./ScholarProjectDetails";
import Research from "./ScholarResearch";
import Confirm from "./ScholarConfirm";
import Success from "./ScholarSuccess";
import Awards from "./ScholarAwards";
import { mainProfile } from "../../utils/api.js";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Steps from "./ScholarSteps";
import Education from "./ScholarEducation";
import Experience from "./ScholarExperience";
import Subjects from "./ScholarSubjects";
import PatentDetails from "./ScholarPatents";
export default function ScholarForm(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const history = useHistory();
  const [templateData, setTemplateData] = useState();
  const [state, setState] = useState({
    navColor: "#2A2C2E",
    firstName: "",
    lastName: "",
    navText: "",
    navImage: "",
    introText: "",
    introTitle: "",
    bio: "",
    aboutBgColor: "#2A2C2E",
    profileImage: "",
    resumeUrl: "",
    githubLink: "",
    linkdin: "",
    footer: "",
    projects: [],
    education: [],
    experience: [],
    patents: [],
    awards: [],
    subjects: [],
    researches: [],
  });
  useEffect(() => {
    mainProfile()
      .then((res) => {
        console.log(res);
        // setTemplateData(res);
        // setState({
        //   ...res,
        //   navColor: "#2A2C2E",
        //   aboutBgColor: "#2A2C2E",
        // });
      })
      .catch((err) => console.log(err));
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => ++prev);
  };

  const prevStep = () => {
    setCurrentStep((prev) => --prev);
  };

  const handleChange = (input) => (e) => {
    setState((prev) => ({ ...prev, [input]: e.target.value }));
  };
  const projectsHandleChange = (idx, input) => (e) => {
    let { projects } = state;
    setState((prev) => ({
      ...prev,
      projects: {
        ...projects,
        [idx]: { ...projects[idx], [input]: e.target.value },
      },
    }));
  };

  const subjectsHandleChange = (input) => (e) => {
    setState((prev) => ({ ...prev, subjects: input }));
  };

  const modalContent = [
    {
      title: "Steps",
      component: (
        <Steps nextStep={nextStep} handleChange={handleChange} state={state} />
      ),
    },
    {
      title: "Navbar Settings",
      component: (
        <NavBarDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          state={state}
        />
      ),
    },
    {
      title: "About Settings",
      component: (
        <AboutMeDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          state={state}
        />
      ),
    },
    {
      title: "Education Settings",
      component: (
        <Education
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          state={state}
        />
      ),
    },
    {
      title: "Research",
      component: (
        <Research
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          state={state}
        />
      ),
    },
    {
      title: "Subjects Settings",
      component: (
        <Subjects
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          subjectsHandleChange={subjectsHandleChange}
          state={state}
        />
      ),
    },
    {
      title: "Experience Settings",
      component: (
        <Experience
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          state={state}
        />
      ),
    },
    {
      title: "Projects Settings",
      component: (
        <ProjectDetails
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          handleChange={handleChange}
          projectsHandleChange={projectsHandleChange}
          state={state}
        />
      ),
    },
    {
      title: "Patents",
      component: (
        <PatentDetails
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          handleChange={handleChange}
          projectsHandleChange={projectsHandleChange}
          state={state}
        />
      ),
    },
    {
      title: "Awards",
      component: (
        <Awards
          nextStep={nextStep}
          prevStep={prevStep}
          setState={setState}
          handleChange={handleChange}
          projectsHandleChange={projectsHandleChange}
          state={state}
        />
      ),
    },

    {
      title: "Are you sure?",
      component: (
        <Confirm nextStep={nextStep} prevStep={prevStep} state={state} />
      ),
    },
    {
      title: "Success",
      component: <Success history={history} state={state} />,
    },
  ];
  return (
    <div
      className="hidden w-full bg-black/40 fixed z-50 flex justify-center items-center md:inset-0 h-modal sm:h-full"
      id="scholarDetailsModal"
    >
      <div className="relative px-4 w-full bg-[#111827] max-w-3xl  rounded-xl h-full md:h-auto">
        <div className="relative bg-[#111827] shadow py-4  text-white">
          <div className="flex w-full justify-between pb-3  rounded-t">
            <h3 className="text-2xl font-extrabold text-slate-100 ">
              {modalContent[currentStep].title}{" "}
            </h3>
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => {
                setCurrentStep(0);
                setState({
                  ...templateData,
                  navColor: "#2A2C2E",
                  aboutBgColor: "#2A2C2E",
                });
                document
                  .getElementById("scholarDetailsModal")
                  .classList.toggle("hidden");
              }}
            >
              <AiOutlineClose fontSize={20} />
            </button>
          </div>
          <div className="max-h-[60vh] px-4 overflow-y-scroll">
            {modalContent[currentStep].component}
          </div>
        </div>
      </div>
    </div>
  );
}
