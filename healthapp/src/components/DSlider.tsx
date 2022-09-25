import React from "react";
import Slider from "react-slick";

import "./DSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide1 from "../image/CrouselImage.png";

const DSlider = () => {
  const sliderSettings = {
    centerMode: true,
    centerPadding: "350px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "320px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1430,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "300px",
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "220px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...sliderSettings}>
        <div className="sliderImage">
          <img src={Slide1} alt="SliderImage one" />
        </div>
        <div className="sliderImage">
          <img src={Slide1} alt="SliderImage one" />
        </div>
        <div className="sliderImage">
          <img src={Slide1} alt="SliderImage one" />
        </div>
        <div className="sliderImage">
          <img src={Slide1} alt="SliderImage one" />
        </div>
        <div className="sliderImage">
          <img src={Slide1} alt="SliderImage one" />
        </div>
      </Slider>
    </div>
  );
};

export default DSlider;
