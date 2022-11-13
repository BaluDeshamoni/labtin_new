import React, { useState } from "react";
import "./PopularPakages.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Link, useNavigate } from "react-router-dom";
import KnowMore from "./KnowMore";
import Modal from "react-modal";

const PopularPakages = (props) => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
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
    <div
      className="checkoutButton"
      onClick={() => navigate("/selectlab", { state: { data: props.data } })}
    >
      Show Labs
    </div>
  );

  const handleBooking = (e) => {
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
  const { availableIn } = props.data;
  const discount = Math.min(...availableIn.map((m) => m.discountPrice));
  const original = Math.min(...availableIn.map((m) => m.originalPrice));
  const discount_per = Math.trunc(((original - discount) / original) * 100);
  const details = props.data.details.split(",");
  const miniDetails = details.length < 4 ? details : details.slice(0, 4);
  console.log(props.data);
  const [active, setActive] = useState(false);

  return (
    <div>
      <Modal
        isOpen={active}
        onRequestClose={() => setActive(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            width: 580,
            height: 500,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            top: "50%",
            left: "50%",
            marginTop: "-250px",
            marginLeft: "-350px",
            borderRadius: "10px",
          },
        }}
      >
        <div className="pakage_box">
          <button className="cancle" onClick={() => setActive(false)}>
            Cancel
          </button>
          <div className="card_offer ">Extra {discount_per}% off</div>
          <div className="pakage_details">
            <h3 className="pakagesName">{props.data.title}</h3>
            <p style={{ color: "red", fontSize: "80%", marginTop: "0.5rem " }}>
              REQUIRED FASTING
            </p>
            {props.data.parameters && (
              <p className="IPara">
                Includes : {props.data.parameters} Parameters
              </p>
            )}
            <div className="pakage_about_know">
              <ol>
                {details.map((d) => (
                  <li>{d}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="pakage_bottom">
            {props.type == "tests" && (
              <div className="test_available">
                <div>Available In</div>
                <div>{props.data.availableIn.length} Diagnostics</div>
              </div>
            )}
            <div className="pakage_price">
              {props.type == "tests" && (
                <div className="test_price">starts from</div>
              )}
              <div>
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  {original}
                </span>{" "}
                <span style={{ color: "purple" }}>₹{discount}/-</span>
              </div>
            </div>
          </div>
          <button className="BookNowButton" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </Modal>
      <div className="pakage_box">
        <div className="card_offer ">Extra {discount_per}% off</div>
        <div className="pakage_details">
          <h3 className="pakagesName">{props.data.title}</h3>
          <p style={{ color: "red", fontSize: "80%", marginTop: "0.5rem " }}>
            REQUIRED FASTING
          </p>
          {props.data.parameters && (
            <p className="IPara">
              Includes : {props.data.parameters} Parameters
            </p>
          )}
          <div className="pakage_about">
            <ol>
              {miniDetails.map((d) => (
                <li>{d}</li>
              ))}
            </ol>
            <button onClick={() => setActive(true)}>(Know more)</button>
          </div>
        </div>

        <div className="pakage_bottom">
          {props.type == "tests" && (
            <div className="test_available">
              <div>Available In</div>
              <div>{props.data.availableIn.length} Diagnostics</div>
            </div>
          )}
          <div className="pakage_price">
            {props.type == "tests" && (
              <div className="test_price">starts from</div>
            )}
            <div>
              <span style={{ textDecoration: "line-through", color: "red" }}>
                {original}
              </span>{" "}
              <span style={{ color: "purple" }}>₹{discount}/-</span>
            </div>
          </div>
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
