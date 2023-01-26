import React, { useState, useEffect } from "react";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card/Card";

function Home() {
  return (
    <div className="px-[10vw]">
      <Jumbotron />
      <Carousel />
    </div>
  );
}

export default Home;
