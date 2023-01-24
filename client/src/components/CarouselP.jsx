import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function () {
  return (
    <div className="carousel container pb-4 pt-4">
      <div className="container-fluid">
        <div style={{ textAlign: "center" }}>
          <h1> Our Proud Customers</h1>
        </div>
      </div>
      <div
        className="container-fluid"
        fluid="true"
        style={{
          textAlign: "center",
          border: " 1px solid #999",
          border: "inset 1px solid #333",
          borderRadius: "10px",
          webkitBoxShadow: "0px 0px 8px rgba(0, 255, 255, 0.4)",
          mozBoxShadow: "0px 0px 8px rgba(0, 255, 255, 0.4)",
          boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.8)",
        }}
      >
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"assets/img/photo1.jpeg"}
              />
              <Carousel.Caption>
                <h3>Sample Customer Portfolio</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"assets/img/photo2.jpeg"}
              />
              <Carousel.Caption>
                <h3>Sample Customer Portfolio</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={"assets/img/photo3.jpeg"}
              />
              <Carousel.Caption>
                <h3>Sample Customer Portfolio</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
