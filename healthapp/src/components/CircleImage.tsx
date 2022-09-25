import React from "react";
import "./CircleImage.css";
const CircleImage = (props: any) => {
  return (
    <div className="selfCheck_icons">
      <div className="selfCheck_circle">
        <img src={props.image} alt="" />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default CircleImage;
