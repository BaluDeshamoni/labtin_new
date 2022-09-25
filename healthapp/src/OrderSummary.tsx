import React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";
import discountIcon from "./image/20.png";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const OrderSummary = () => {
  const loc = useLocation();
  const info = loc.state;
  console.log(info);
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const navigate = useNavigate();
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleClick = () => {
    setState({ ...state, open: true });
  };
  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        navigate("/onSummary");
      }}
    >
      Proceed To Pay
    </button>
  );
  return (
    <div className="Summary_main">
      <div className="OrderSummary_main desktopElement ">
        <div className="orderSummary_box">
          <h3 className="headingOrder">Order Summary</h3>
          <h3 className="patientName">
            Surya <span style={{ fontSize: "80%" }}>22/M</span>
          </h3>
          <div className="pakageName">
            <h3>Typroid Profile</h3>
            <h3>10-12hr fasting is Required</h3>
          </div>
          <div className="pakageAvialability">
            <p>Pickup Scheduled on</p>
            <h3>2nd July, 08:00-09:00AM</h3>
            <p>Sample Collection Address</p>
            <h3>101/202/192, Bank Colony, Bangalore</h3>
          </div>
        </div>
        <div className="AvailableCoupon">
          <h2>Available Coupons</h2>
          <div className="Coupons_now">
            <h3>Use "lab30" promocode and get 30% discount</h3>
            <button>Apply</button>
          </div>
        </div>
      </div>
      <div className="OrderSummary">
        <h1 className="mobileElement">" Order Summary "</h1>
        <div className="hardcopy mobileElement">
          <div className="round">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
          </div>
          <span>I need hardcopy of my report (₹50 Charge)</span>
        </div>
        <div className="offers_div_main">
          <div className="offers_div">
            <img src={discountIcon} alt="" />
            <h2>Unlock Offers Or Apply Promocodes</h2>{" "}
          </div>
          <div className="inputCoupon desktopElement">
            <input type="text" />
            <button>Apply</button>
          </div>
        </div>

        <div className="billDetails">
          <h3>Bill Details</h3>
          <div className="billCalc">
            <div className="billrow">
              <p>Test Total</p> <h5>₹250</h5>
            </div>
            <div className="billrow">
              <p>Sample Collection Charges</p>{" "}
              <div className="billrow">
                <h5 style={{ textDecoration: "line-through", color: "red" }}>
                  ₹150{" "}
                </h5>{" "}
                <span
                  style={{
                    textDecoration: "none",
                    color: "#0EB6FF",
                    fontWeight: "bold",
                  }}
                >
                  FREE
                </span>
              </div>
            </div>
            <div className="billrow">
              <p>Applied Discount</p> <h5>₹0</h5>
            </div>
          </div>
        </div>
        <Snackbar
          sx={{ marginBottom: "5rem" }}
          anchorOrigin={{ vertical, horizontal }}
          open={true}
          onClose={handleClose}
          message="Total ₹250"
          action={action}
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
