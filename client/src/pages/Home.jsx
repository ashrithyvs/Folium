import React, { useState, useEffect } from "react";
import "./Home.css";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Card from "../components/Card/Card";
import Nav from "../components/Navbar";

function Home() {
  return (
    <div>
      <Nav />
      <div style={{ textAlign: "center" }}>
        <Jumbotron />
        <h1 className="text-4xl font-bold underline">Hello world!</h1>
      </div>
      <div className="MyCarouselBackground">
        <Carousel />
      </div>
      <div style={{ marginBottom: "50px" }}>&nbsp;</div>
      <div className="MyCardContainer">
        <div className="MyCard img13">
          <Card />
        </div>
        <div className="MyCard img12">
          <Card />
        </div>
        <div className="MyCard img11">
          <Card />
        </div>
        {/* Clearfix to fix float issue */}
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default Home;