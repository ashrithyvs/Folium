import React from "react";

export default function Navbar({ templateData }) {
  return (
    <div className="flex justify-between items-center px-[10vw] py-4 mx-auto sticky top-0 text-white">
      <a
        href="#intro"
        className="text-white cursor-pointer text-3xl font-semibold tracking-wide"
      >
        {templateData.navText}
      </a>
      <div className="flex justify-center space-x-4 ml-auto ">
        <a className="text-white" href="#about">
          About
        </a>
        <a className="text-white" href="#resume">
          Resume
        </a>
        <a className="text-white" href="#projects">
          Projects
        </a>
      </div>
    </div>
  );
}
