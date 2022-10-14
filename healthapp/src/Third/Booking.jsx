import React, { useState, useEffect } from "react";
import "./Booking.css";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Snackbar from "@mui/material/Snackbar";
import { useLocation, useNavigate } from "react-router-dom";
import DateCrousel from "../components/DateCrousel";
import AddUser from "./AddUser";
import AddAddress from "./AddAddress";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../actions/userActions";

const Booking = () => {
  const loc = useLocation();
  const dispatch = useDispatch();
  const data = loc.state.info;
  console.log(data);
  const [info, setInfo] = useState(data);
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const [addUser, setAddUser] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [address, setAddress] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const [date, setDate] = useState(0);
  const navigate = useNavigate();
  const [appointmentDetails, setAppointmentDetails] = useState({
    time: "",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    if (appointmentDetails.time === "") setState({ ...state, open: false });
  };
  const toggleOptionsV = (e) => {
    if (e.target.parentElement.classList[0] === "appointmentSection") {
      e.target.parentElement.nextSibling.classList.toggle("hideOptions");
      e.target.parentElement.children[1].classList.toggle("rotate");
    }
  };

  const handleAppointment = (e) => {
    setAppointmentDetails({ ...appointmentDetails, time: e.target.innerHTML });

    const options = document.getElementsByClassName("appointmentOption");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("activeOption");
    }
    e.target.classList.add("activeOption");
    handleClick();
  };

  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        const data = {
          ...info,
          address,
          selectedUser,
          currentDate: currentDate.toString().split(" "),
          time: appointmentDetails.time,
        };
        navigate("/onSummary", { state: data });
      }}
    >
      Checkout
    </button>
  );

  const { user } = useSelector((state) => state.userDetails);

  console.log(user);
  useEffect(() => {
    if (!user._id) {
      dispatch(userDetails());
    }
  }, [dispatch]);
  console.log(selectedUser);
  console.log(address);
  console.log(appointmentDetails);
  const currentDate = new Date();
  const conDate = new Date();
  currentDate.setDate(conDate.getDate() + date);

  return (
    <div className="booking_div">
      <h2 className="desktopElement">Select Slot and Address</h2>
      <div className="BookingFor_div">
        <div>
          <div className="bookedFor">
            <h3>Who are you Booking for?</h3>
            <div className="avatars">
              <div className="add_beforeAvtar">
                <AddCircleOutlineRoundedIcon fontSize="inherit" />
                <h3 onClick={() => setAddUser(true)}>Add</h3>
                <AddUser
                  visibility={addUser}
                  onClose={() => setAddUser(false)}
                />
              </div>
              <div className="addedAvatar">
                {user.users &&
                  user.users.map((u) => (
                    <div
                      className="avat_det"
                      onClick={() => setSelectedUser(u)}
                    >
                      <img
                        alt="Logo"
                        src={u.img}
                        style={{
                          width: "4rem",
                          height: "4rem",
                          border: "1px solid grey",
                          bgcolor: "purple",
                          borderRadius: "50%",
                        }}
                      />
                      <h3>{u.name}</h3>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="pickUpLocation">
            <h3>Pick Up Location</h3>
            {address ? (
              <div className="iconLoaction">
                <p>
                  {address.place} , {address.city} , {address.state}
                </p>
              </div>
            ) : (
              <div className="iconLoaction">
                <LocationOnIcon fontSize="inherit" color="inherit" />
                <p>Let us know where to collect test sample from</p>
              </div>
            )}

            <button
              onClick={() => setAddAddress(true)}
              className="addAddressButton"
            >
              Add Address
            </button>
            <AddAddress
              visibility={addAddress}
              onClose={() => setAddAddress(false)}
              address={(d) => setAddress(d)}
            />
          </div>
        </div>
        <div>
          <div className="selectBookingSlot">
            <h3>Select Booking Slot</h3>
            <div className="selectBookingSlot_div">
              <DateCrousel setdate={(d) => setDate(d)} />
              <div className="appointmentSelect">
                <div className="appointmentSection" onClick={toggleOptionsV}>
                  <h4>
                    Morning{" "}
                    <span style={{ fontSize: "80%", fontWeight: "600" }}>
                      (6:00 AM - 12:00 PM)
                    </span>
                  </h4>
                  <ArrowDropDownIcon className="downArrow" fontSize="large" />
                </div>
                <div className="appointmentOptions hideOptions">
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    6:00 AM - 7:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    7:00 AM - 8:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    8:00 AM - 9:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    9:00 AM - 10:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    10:00 AM - 11:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    11:00 AM - 12:00 PM
                  </div>
                </div>
              </div>
              <div className="appointmentSelect">
                <div className="appointmentSection" onClick={toggleOptionsV}>
                  <h4>
                    Afternoon{" "}
                    <span style={{ fontSize: "80%", fontWeight: "600" }}>
                      (12:00 PM-2:00PM)
                    </span>
                  </h4>
                  <ArrowDropDownIcon className="downArrow" fontSize="large" />
                </div>

                <div className="appointmentOptions hideOptions">
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    6:00 AM - 7:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    7:00 AM - 8:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    8:00 AM - 9:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    9:00 AM - 10:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    10:00 AM - 11:00 AM
                  </div>
                  <div
                    className="appointmentOption"
                    onClick={handleAppointment}
                  >
                    11:00 AM - 12:00 PM
                  </div>
                </div>
              </div>
              <Snackbar
                sx={{ marginBottom: "5rem" }}
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="Slot Selected"
                action={action}
                key={vertical + horizontal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
