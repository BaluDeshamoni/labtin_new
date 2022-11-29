import React from "react";
import { useNavigate } from "react-router-dom";
import "./CircleImage.css";
const CircleImage = (props: any) => {
  const navigate = useNavigate();
  return (
    <div
      className="selfCheck_icons"
      onClick={() => props.type == "menu" && navigate(`/scroll/${props.id}`)}
    >
      <div className="selfCheck_circle">
        <img src={props.image} alt="" />
      </div>
      {props.name ? (
        <h3>{props.name}</h3>
      ) : (
        <h3 onClick={() => navigate("/login")}>Login/sign Up</h3>
      )}
    </div>
  );
};

export default CircleImage;
