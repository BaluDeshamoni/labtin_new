import React, { useEffect, useState } from "react";
import "./ShowLabs.css";
import DSlider from "./DSlider";
import Snackbar from "@mui/material/Snackbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLabs } from "../actions/labActions";

const ShowLabs = () => {
  const loc = useLocation();
  const data = loc.state.data;
  const avail_labs = loc.state.avail_labs;
  console.log(data, "kkk");
  console.log(avail_labs, "ppp");
  const dispatch = useDispatch();
  const [info, setInfo] = React.useState({});
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { labList } = useSelector((state) => state.labList);
  const { filter } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(getLabs());
  }, [dispatch]);

  const { vertical, horizontal, open } = state;

  var available_labs;
  const cartItems = new Map();
  var availableIn;
  var testTitles = [];
  if (avail_labs) {
    for (const x of data.values()) {
      testTitles.push(x.title);
      x.availableIn
        .filter((f) => avail_labs.includes(f.lab))
        .map((m) => {
          if (cartItems.has(m.lab)) {
            cartItems.set(m.lab, cartItems.get(m.lab) + m.discountPrice);
          } else {
            cartItems.set(m.lab, m.discountPrice);
          }
        });
    }
    available_labs = labList.filter((f) => avail_labs.includes(f._id));
  } else {
    var dat;
    for (const x of data.values()) {
      dat = x;
      testTitles.push(x.title);
    }
    const { availableIn: inData } = dat;
    availableIn = inData;
    const availableInArray = availableIn.map((m) => m.lab);
    available_labs = labList.filter((f) => availableInArray.includes(f._id));
  }

  const Labsdiv = (lab) => {
    return (
      <div className="labs_div">
        <div className="lab_logo">
          <img src={lab.logo} />
        </div>
        <div className="labs_name">
          <h2>{lab.title}</h2>
          <p>{lab.accrediation} Accredited</p>

          <p>E-Report : {lab.time}Hours</p>
        </div>
        <div className="labs_price">
          {avail_labs ? (
            <h3>₹{cartItems.get(lab._id)}</h3>
          ) : (
            <h3>₹{availableIn.find((f) => f.lab == lab._id).discountPrice}</h3>
          )}
          <input
            className="selectLabRadio"
            type="radio"
            onClick={handlecheckbox}
            name="rad"
            value={lab._id}
          />
        </div>
      </div>
    );
  };

  const handlecheckbox = (e) => {
    const l = available_labs.find((l) => l._id == e.target.value);
    const r = avail_labs
      ? cartItems.get(e.target.value)
      : availableIn.find((l) => l.lab == e.target.value);
    setInfo({ ...info, test_titles: testTitles, lab: l, price: r });
    setState({ ...state, open: true });
  };

  const action = (
    <div
      className="checkoutButton"
      onClick={() => navigate("/Booking", { state: { info } })}
    >
      Next
    </div>
  );
  const filtered_labs = available_labs.filter(
    (m) => m.state?.toLowerCase() == filter?.toLowerCase()
  );
  console.log(filtered_labs, "plp");

  return (
    <div className="showLabs_main">
      <div className="third_section desktopElement">
        <DSlider />
      </div>
      <div className="showLabs_main_div">
        {filtered_labs.length > 0 ? (
          <div className="showLabs_list">
            <h2>Select Labs Available in {filter}</h2>
            {filtered_labs.map((l) => Labsdiv(l))}
          </div>
        ) : (
          <div className="showLabs_list">No Labs Available</div>
        )}
      </div>
      <Snackbar
        sx={{ marginBottom: "0.2rem" }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message="Lab Selected"
        action={action}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default ShowLabs;
