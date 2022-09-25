import React from "react";
import "./InSlider.css";
// import FirstIconFirst from "../image/FreeSample.png";
// import FirstIconSecond from "../image/firstIcon-2.png";
// import FirstIconThird from "../image/firstIcon-3.png";
// import secondFirst from "../image/secondfirst.png";
import Slide1 from "../image/CrouselImage.png";
const InSlider = () => {
  return (
    <div id="slider">
      <figure>
        <div>
          <img src={Slide1} alt="SliderImage one" />
        </div>

        <div>
          {" "}
          <img src={Slide1} alt="SliderImage two" />
        </div>
        <div>
          {" "}
          <img src={Slide1} alt="SliderImage three" />
        </div>
        <div>
          {" "}
          <img src={Slide1} alt="SliderImage four" />
        </div>
        <div>
          {" "}
          <img src={Slide1} alt="SliderImage five" />
        </div>
        <div>
          {" "}
          <img src={Slide1} alt="SliderImage six" />
        </div>
      </figure>
    </div>
  );
};

export default InSlider;
