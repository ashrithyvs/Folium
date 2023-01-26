import React, { useEffect, useState } from "react";
import "./Temp1.css";
import Navbar from "../tOneComp/Nav";
import About from "../tOneComp/About";
import Projects from "../tOneComp/Projects/index.jsx";
import Footer from "../tOneComp/Footer";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Temp1() {
  let history = useHistory();

  function handleClick() {
    return history.push("/quickdesign");
  }

  return (
    <div>
      <div id="tempBorder">
        <Navbar />
        <About />
        <Projects />
        <Footer />
      </div>
      <div id="tempBtn">
        <Button className="btn btn-info btn-lg" onClick={handleClick}>
          Templates
        </Button>
      </div>
    </div>
  );
}
