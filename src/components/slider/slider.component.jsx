import React from "react";
import styles from "./styles.module.css";
import Slide1 from "../../assets/images/home/slide1.png";
import Slide2 from "../../assets/images/home/slide2.png";
import Slide3 from "../../assets/images/home/slide3.png";

const Slider = () =>
{
  return (
    <div className={ `${ styles.styledSlider}`}>
      <div
        id="carouselCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className={`${styles.carouselComponent} carousel-indicators bg-transparent`}>
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
    </div>
  );
};

export default Slider;
