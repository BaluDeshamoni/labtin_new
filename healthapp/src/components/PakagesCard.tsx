import React from "react";
import "./LabTestCard.css";
const PakagesCard = (props: any) => {
  return (
    <div className="labtest_card">
      <div className="card_offer">Extra {30}% off</div>
      <div className="card_firstSection">
        <div className="card_heading">
          <h3>{props.heading}</h3>
          <h4 style={{ color: "red" }}>{props.requirement}</h4>
        </div>
      </div>
      <div className="card_secondSection">
        <div className="card_description">
          <p>{props.description}</p>
        </div>
        <div className="card_price">
          <div>
            <span style={{ color: "red", textDecoration: "line-through" }}>
              ₹{props.previousPrice}
            </span>
            <span> ₹{props.currentPrice}</span>
          </div>
          <br />
          <button className="labtest_addButton">Book Now</button>
        </div>
      </div>
      <div className="card_thirdSection">
        <button className="card_knowMore">
          {"("}Know More{")"}
        </button>
        {/* <div className="card_availabity">
          <span>Available In</span>
          <h3>{props.diagnostics} Diagnostics</h3>
        </div> */}
      </div>
    </div>
  );
};

export default PakagesCard;
