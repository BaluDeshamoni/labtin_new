import React, { useEffect, useState } from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";
import discountIcon from "./image/20.png";
import { getDiscounts } from "./actions/packageActions";
import { useDispatch, useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import { createOrder } from "./actions/orderActions";

const OrderSummary = () => {
  const loc = useLocation();
  const dispatch = useDispatch();
  const data = loc.state;
  console.log(data);
  const [state, setState] = React.useState({
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

  const { discountList } = useSelector((state) => state.discounts);

  const hiddenDiscounts = discountList.filter((d) => d.hidden == "Yes");
  const availableDiscounts = discountList.filter((d) => d.hidden == "No");
  const applicableDiscounts = availableDiscounts.filter((d) =>
    d.applicableTo == "new" ? data.newUser : true
  );
  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  const [openDiscounts, setOpenDiscounts] = useState(false);
  const [discount, setDiscount] = useState({ code: "", percent: 0 });
  const [uniDiscount, setUniDiscount] = useState("");
  const [appDiscount, setAppDiscount] = useState(0);

  const addUniDiscount = () => {
    const dis = hiddenDiscounts.find((f) => f.promoCode == uniDiscount);
    setDiscount({
      code: dis.promoCode,
      percent: dis.discountPercentage,
    });
    setAppDiscount(
      (Number(data.price.discountPrice) * Number(dis.discountPercentage)) / 100
    );
  };
  const removeHandler = () => {
    setDiscount({ code: "", percent: 0 });
    setUniDiscount("");
    setAppDiscount(0);
  };

  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        dispatch(
          createOrder(
            {
              ...data,
              totalPrice: data.price.discountPrice - appDiscount,
              discountUsed: discount,
            },
            navigate
          )
        );
      }}
    >
      Proceed To Pay
    </button>
  );

  return (
    <div className="Summary_main">
      {openDiscounts && (
        <div className="dialog_body_dis">
          <div
            className="close_button"
            onClick={() => {
              setOpenDiscounts(false);
            }}
          >
            <Close />
          </div>

          {applicableDiscounts.map((d) => (
            <div className="Coupons_now">
              <h3>
                Use {d.promoCode} promocode and get {d.discountPercentage}
                {"% "}
                discount
              </h3>
              <button
                onClick={() => {
                  setDiscount({
                    code: d.promoCode,
                    percent: d.discountPercentage,
                  });
                  setAppDiscount(
                    (Number(data.price.discountPrice) *
                      Number(d.discountPercentage)) /
                      100
                  );
                  setOpenDiscounts(false);
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="OrderSummary_main desktopElement ">
        <div className="orderSummary_box">
          <h3 className="headingOrder">Order Summary</h3>
          <h3 className="patientName">
            {data.selectedUser.name}{" "}
            <span style={{ fontSize: "80%" }}>
              {data.selectedUser.age}/{data.selectedUser.sex[0]}
            </span>
          </h3>
          <div className="pakageName">
            <h3>{data.title}</h3>
            <h3>10-12hr fasting is Required</h3>
          </div>
          <div className="pakageAvialability">
            <p>Pickup Scheduled on</p>
            <h3>
              {data.currentDate[0]} , {data.currentDate[2]}nd{" "}
              {data.currentDate[1]} , {data.time}
            </h3>
            <p>Sample Collection Address</p>
            <h3>
              {data.address.place},{data.address.city},{data.address.state},
            </h3>
          </div>
        </div>
        <div className="AvailableCoupon">
          <h2>Available Coupons</h2>
          {applicableDiscounts.length > 2 ? (
            <>
              <div className="Coupons_now">
                <h3>
                  Use {applicableDiscounts[0].promoCode} promocode and get{" "}
                  {applicableDiscounts[0].discountPercentage}
                  {"% "}
                  discount
                </h3>
                <button
                  onClick={() => {
                    setDiscount({
                      code: applicableDiscounts[0].promoCode,
                      percent: applicableDiscounts[0].discountPercentage,
                    });
                    setAppDiscount(
                      (Number(data.price.discountPrice) *
                        Number(applicableDiscounts[0].discountPercentage)) /
                        100
                    );
                  }}
                >
                  Apply
                </button>
              </div>
              <div className="Coupons_now">
                <h3>
                  Use {applicableDiscounts[1].promoCode} promocode and get{" "}
                  {applicableDiscounts[1].discountPercentage}
                  {"% "}
                  discount
                </h3>
                <button
                  onClick={() => {
                    setDiscount({
                      code: applicableDiscounts[1].promoCode,
                      percent: applicableDiscounts[1].discountPercentage,
                    });
                    setAppDiscount(
                      (Number(data.price.discountPrice) *
                        Number(applicableDiscounts[1].discountPercentage)) /
                        100
                    );
                  }}
                >
                  Apply
                </button>
              </div>
              <div className="Coupons_now">
                <button onClick={() => setOpenDiscounts(true)}>
                  View More
                </button>
              </div>
            </>
          ) : (
            applicableDiscounts.map((d) => (
              <div className="Coupons_now">
                <h3>
                  Use {d.promoCode} promocode and get {d.discountPercentage}
                  {"% "}
                  discount
                </h3>
                <button
                  onClick={() => {
                    setDiscount({
                      code: d.promoCode,
                      percent: d.discountPercentage,
                    });
                    setAppDiscount(
                      (Number(data.price.discountPrice) *
                        Number(d.discountPercentage)) /
                        100
                    );
                  }}
                >
                  Apply
                </button>
              </div>
            ))
          )}
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
            <input
              type="text"
              value={uniDiscount}
              onChange={(e) => setUniDiscount(e.target.value)}
            />
            <button onClick={addUniDiscount}>Apply</button>
          </div>
        </div>

        <div className="billDetails">
          <h3>Bill Details</h3>
          <div className="billCalc">
            <div className="billrow">
              <p>Test Total</p> <h5>₹{data.price.discountPrice}</h5>
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
              <p>Applied Discount</p>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
                onClick={removeHandler}
              >
                Remove Discount
              </p>{" "}
              <h5>₹{appDiscount}</h5>
            </div>
          </div>
        </div>
        <Snackbar
          sx={{ marginBottom: "5rem" }}
          anchorOrigin={{ vertical, horizontal }}
          open={true}
          onClose={handleClose}
          message={`Total ₹${data.price.discountPrice - appDiscount}`}
          action={action}
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
