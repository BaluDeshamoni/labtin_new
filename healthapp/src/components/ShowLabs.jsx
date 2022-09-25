import React from "react";
import "./ShowLabs.css";
import DSlider from "./DSlider";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const ShowLabs = () => {
  const loc = useLocation();
  const data = loc.state;
  const [info, setInfo] = React.useState(data);
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handlecheckbox = (e) => {
    const l = labs.find((l) => l.id == e.target.value);
    setInfo({ ...info, lab: l });
    setState({ ...state, open: true });
  };

  const action = (
    <Link className="checkoutButton" to="/Booking/data" state={info}>
      Next
    </Link>
  );

  const labs = [
    { id: 1, name: "Dr Bharti Diagnostics", hrs: 8, cost: 100 },
    { id: 2, name: "Dr Amogh Diagnostics", hrs: 3, cost: 500 },
  ];
  const Labsdiv = (id, name, hour, price) => {
    return (
      <div className="labs_div">
        <div className="labs_name">
          <h2>{name}</h2>
          <p>NABL Accredited</p>

          <p>E-Report : {hour}Hours</p>
        </div>
        <div className="labs_price">
          <h3>₹{price}</h3>
          <input
            className="selectLabRadio"
            type="radio"
            onClick={handlecheckbox}
            name="rad"
            value={id}
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
          {labs.map((l) => Labsdiv(l.id, l.name, l.hrs, l.cost))}
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
