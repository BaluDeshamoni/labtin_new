import React from "react";
import "./LabTestCard.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const LabTestCards = (props: any) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClickSnack = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleClick = (e: any) => {
    if (e.target.innerHTML == "Add") {
      e.target.classList.remove("BookNowButton");
      e.target.classList.add("RemoveNowButton");
      e.target.innerHTML = "Remove";
      setState({ ...state, open: true });
    } else {
      e.target.innerHTML = "Add";
      e.target.classList.remove("RemoveNowButton");

      e.target.classList.add("BookNowButton");
      setState({ ...state, open: false });
    }
  };
  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        navigate("/selectLab");
      }}
    >
      Show Labs
    </button>
  );
  return (
    <div className="labtest_card">
      <div className="card_offer ">Extra {props.offPercentage}% off</div>
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
          <h3>Starts From</h3>
          <div>
            <span style={{ color: "red", textDecoration: "line-through" }}>
              ₹{props.previousPrice}
            </span>
            <span> ₹{props.currentPrice}</span>
          </div>
          <br />
          <button className="labtest_addButton" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
      <div className="card_thirdSection">
        <button className="card_knowMore">
          {"("}Know More{")"}
        </button>
        <div className="card_availabity">
          <span>Available In</span>
          <h3>{props.diagnostics} Diagnostics</h3>
        </div>
      </div>
      <Snackbar
        sx={{ marginBottom: "5rem" }}
        className="snackbar"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="1 item in Cart"
        action={action}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default LabTestCards;
