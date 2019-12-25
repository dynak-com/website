import React from "react";
import { StyledSlider } from "./slider.styles";
import Slide1 from "../../assets/images/home/3009.jpg";
import Slide2 from "../../assets/images/home/3015.png";
import Slide3 from "../../assets/images/home/3027.jpg";

const Slider = () => {
  return (
    <StyledSlider>
      <div
        id="carouselCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators bg-transparent">
          <li
            data-target="#carouselCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselCaptions" data-slide-to="1"></li>
          <li data-target="#carouselCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100" alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="slide2" />
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100" alt="slide3" />
          </div>
        </div>
      </div>
    </StyledSlider>
  );
};

export default Slider;
