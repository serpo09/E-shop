import React from "react";
import "./css/homepage.css";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import carousel3 from "../../images/carousel3.jpg";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="banner carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Shop With Us</h2>
              <p>
                Some of the popular brand here all over of Nation
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h2>Shop With Us</h2>
              <p>
                Some of the popular brand here all over of Nation
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h2>Shop With Us</h2>
              <p>
                Some of the popular brand here all over of Nation
              </p>
            </div>
          </div>
        </div>
        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
};

export default Banner;
