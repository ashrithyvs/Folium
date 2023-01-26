import React, { useEffect, useState } from "react";
import NavBarDetails from "./NavBarDetails";
import AboutMeDetails from "./AboutMeDetails";
import ProjectDetails from "./ProjectDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory } from "react-router-dom";
export default function UserForm(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const history = useHistory();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    navColor: "",
    navText: "",
    navImage: "",
    introText: "",
    introTitle: "",
    bio: "",
    aboutBgColor: "",
    profileImage: "",
    projectOneTitle: "",
    projectOneText: "",
    projectOneUrl: "",
    projectOneImage: "",
    projectTwoTitle: "",
    projectTwoText: "",
    projectTwoUrl: "",
    projectTwoImage: "",
    projectThreeTitle: "",
    projectThreeText: "",
    projectThreeUrl: "",
    projectThreeImage: "",
    resumeUrl: "",
    githubLink: "",
    linkdin: "",
    footer: "",
  });

  const nextStep = () => {
    setCurrentStep((prev) => ++prev);
  };

  const prevStep = () => {
    setCurrentStep((prev) => --prev);
  };

  const handleChange = (input) => (e) => {
    setState((prev) => ({ ...prev, [input]: e.target.value }));
  };

  const modalContent = [
    {
      title: "Navbar",
      component: (
        <NavBarDetails
          nextStep={nextStep}
          handleChange={handleChange}
          state={state}
        />
      ),
    },
    {
      title: "About",
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
      title: "Projects",
      component: (
        <ProjectDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
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
      component: <Success nextStep={history} state={state} />,
    },
  ];
  return (
    <div
      className="hidden w-full bg-black/40 fixed z-50 flex justify-center items-center md:inset-0 h-modal sm:h-full"
      id="portfolioDetailsModal"
    >
      <div className="relative px-4 w-full max-w-3xl  rounded-xl h-full md:h-auto">
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
                  firstName: "",
                  lastName: "",
                  navColor: "",
                  navText: "",
                  navImage: "",
                  introText: "",
                  introTitle: "",
                  bio: "",
                  aboutBgColor: "",
                  profileImage: "",
                  projectOneTitle: "",
                  projectOneText: "",
                  projectOneUrl: "",
                  projectOneImage: "",
                  projectTwoTitle: "",
                  projectTwoText: "",
                  projectTwoUrl: "",
                  projectTwoImage: "",
                  projectThreeTitle: "",
                  projectThreeText: "",
                  projectThreeUrl: "",
                  projectThreeImage: "",
                  resumeUrl: "",
                  githubLink: "",
                  linkdin: "",
                  footer: "",
                });
                document
                  .getElementById("portfolioDetailsModal")
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
