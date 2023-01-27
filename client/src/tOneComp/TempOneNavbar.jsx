import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center px-[10vw] space-x-4 py-4 mx-auto text-white">
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
  );
}
