import React from "react";

export default function Navbar({ templateData }) {
  return (
    <div
      // style={{ backgroundColor: templateData.navColor }}
      className="flex justify-between items-center px-[10vw] py-4 mx-auto sticky top-0 text-white"
    >
      {/* <a
        href="#intro"
        className="text-white cursor-pointer uppercase text-3xl font-semibold tracking-wide"
      >
        {templateData.navText}
      </a> */}
      <div className="flex bg-transparent justify-center space-x-16 mx-auto font-bold text-lg tracking-wider">
        <a className="text-white" href="#about">
          ABOUT
        </a>
        <a className="text-white" href="#education">
          EDUCATION
        </a>
        <a className="text-white" href="#experience">
          EXPERIENCE
        </a>
        <a className="text-white" href="#skills">
          SKILLS
        </a>
        <a className="text-white" href="#projects">
          PROJECTS
        </a>
      </div>
    </div>
  );
}
