import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./DateCrousel.css";
const DateCrousel = () => {
  const [dateStep, setDateStep] = useState(0);
  const [conDate, setDate] = useState(new Date());
  const currentDate = new Date();
  currentDate.setDate(conDate.getDate() + dateStep);
  const currentDateList = currentDate.toString().split(" ");
  console.log(currentDate);

  const previousDate = new Date();
  previousDate.setDate(conDate.getDate() - 1 + dateStep);
  const previousDateList = previousDate.toString().split(" ");
  console.log(previousDate);

  const nextDate = new Date();
  nextDate.setDate(conDate.getDate() + 1 + dateStep);
  const nextDateList = nextDate.toString().split(" ");

  const nextNextDate = new Date();
  nextNextDate.setDate(conDate.getDate() + 2 + dateStep);
  const nextNextDateList = nextNextDate.toString().split(" ");

  if (currentDate == conDate) {
    setDate(currentDate);
  }

  console.log(dateStep);

  const handleprevious = (e: any) => {
    setDateStep(dateStep - 1);
  };
  const handlenext = (e: any) => {
    setDateStep(dateStep + 1);
  };

  return (
    <div className="dateCrousel">
      <ArrowBackIosIcon onClick={handleprevious} />
      <div className="firstDate">
        <p>{previousDateList[0]}</p>
        <p>{previousDateList[2]}</p>
        <p>{previousDateList[1]}</p>
      </div>
      <div className="secondDate">
        <p>{currentDateList[0]}</p>
        <p>{currentDateList[2]}</p>
        <p>{currentDateList[1]}</p>
      </div>
      <div className="thirdDate">
        <p>{nextDateList[0]}</p>
        <p>{nextDateList[2]}</p>
        <p>{nextDateList[1]}</p>
      </div>
      <div className="firstDate">
        <p>{nextNextDateList[0]}</p>
        <p>{nextNextDateList[2]}</p>
        <p>{nextNextDateList[1]}</p>
      </div>
      <ArrowForwardIosIcon onClick={handlenext} />
    </div>
  );
};

export default DateCrousel;
