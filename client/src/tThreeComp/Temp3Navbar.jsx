import React from "react";

export default function Temp3Navbar() {
  return (
    <div
      //   style={{ backgroundColor: templateData.navColor }}
      className="flex items-center px-[10vw] py-4 mx-auto sticky top-0 text-white bg-[#212121] navbar w-full"
    >
      <div className="flex bg-transparent justify-center space-x-4 mx-auto ">
        <a className="text-white tracking-widest" href="#about">
          About
        </a>
        <a className="text-white tracking-widest" href="#resume">
          Resume
        </a>
        <a className="text-white tracking-widest" href="#projects">
          Projects
        </a>
      </div>
    </div>
  );
}
