import React from "react";
import "./PopularPakages.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Link, useNavigate } from "react-router-dom";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const PopularPakages = (props: any) => {
  const navigate = useNavigate();

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const action = (
    <Link className="checkoutButton" to="/selectlab/data" state={props.data}>
      Show Labs
    </Link>
  );

  const handleBooking = (e: any) => {
    if (e.target.innerHTML === "Book Now") {
      e.target.classList.remove("BookNowButton");
      e.target.classList.add("RemoveNowButton");
      e.target.innerHTML = "Remove";
      setState({ ...state, open: true });
    } else {
      e.target.innerHTML = "Book Now";
      e.target.classList.remove("RemoveNowButton");

      e.target.classList.add("BookNowButton");
      setState({ ...state, open: false });
    }
  };

  return (
    <div>
      <div className="pakage_box">
        <div className="card_offer ">Extra {props.offPercentage}% off</div>
        <div className="pakage_details">
          <h3 className="pakagesName">{props.data.title}</h3>
          <p style={{ color: "red", fontSize: "80%", marginTop: "0.5rem " }}>
            REQUIRED FASTING
          </p>
          <p className="IPara">Includes : {props.data.parameters} Parameters</p>
          <div className="pakage_about">
            <p>{props.data.details}</p>
            <button>(Know more)</button>
          </div>
        </div>
        <div className="pakage_price">
          <span style={{ textDecoration: "line-through", color: "red" }}>
            {props.data.originalPrice}
          </span>{" "}
          <span style={{ color: "purple" }}>₹{props.data.discountPrice}/-</span>
        </div>
        <button className="BookNowButton" onClick={handleBooking}>
          Book Now
        </button>
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

export default PopularPakages;
