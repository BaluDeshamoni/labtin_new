import React, { useEffect } from "react";
import "./ShowLabs.css";
import DSlider from "./DSlider";
import Snackbar from "@mui/material/Snackbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLabs } from "../actions/labActions";

const ShowLabs = () => {
  const loc = useLocation();
  const data = loc.state.data;
  const dispatch = useDispatch();
  const [info, setInfo] = React.useState(data);
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { labList } = useSelector((state) => state.labList);
  useEffect(() => {
    dispatch(getLabs());
  }, [dispatch]);

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const { availableIn } = data;
  const availableInArray = availableIn.map((m) => m.lab);
  const available_labs = labList.filter((f) =>
    availableInArray.includes(f._id)
  );

  const handlecheckbox = (e) => {
    const l = available_labs.find((l) => l._id == e.target.value);
    const r = availableIn.find((l) => l.lab == e.target.value);
    setInfo({ ...info, lab: l, price: r });
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

  const Labsdiv = (lab) => {
    return (
      <div className="labs_div">
        <div className="labs_name">
          <h2>{lab.title}</h2>
          <p>{lab.accrediation} Accredited</p>

          <p>E-Report : {lab.time}Hours</p>
        </div>
        <div className="labs_price">
          <h3>₹{availableIn.find((f) => f.lab == lab._id).discountPrice}</h3>
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
  return (
    <div className="showLabs_main">
      <div className="third_section desktopElement">
        <DSlider />
      </div>
      <div className="showLabs_main_div">
        <h2>Select Labs Available in Chennai</h2>

        <div className="showLabs_list">
          {available_labs.map((l) => Labsdiv(l))}
        </div>
      </div>
      <Snackbar
        sx={{ marginBottom: "5rem" }}
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
