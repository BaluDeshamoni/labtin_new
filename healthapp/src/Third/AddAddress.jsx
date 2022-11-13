import { Close } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import "./AddUser.css";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../actions/userActions";

function AddAddress(props) {
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    place: "",
    city: "",
    pinCode: "",
    state: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addAddress(address));

    props.onClose();
    setAddress({ place: "", city: "", pinCode: "", state: "" });
  };
  if (!props.visibility) {
    return null;
  }
  return (
    <div className="dialog_body">
      <div>
        <div className="close_button" onClick={() => props.onClose()}>
          <Close />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        ></div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              fontSize: "large",
            }}
          >
            <p>Enter Your Address</p>
            <input
              type="text"
              placeholder="Enter Your Address"
              onChange={(e) =>
                setAddress({ ...address, place: e.target.value })
              }
              style={{
                width: "200px",
                height: "15px",
                fontSize: "15px",
                padding: "10px",
                color: "black",
                borderColor: "black",
                backgroundColor: "whitesmoke",
                border: "0.5px solid",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            />
            <input
              type="text"
              placeholder="Enter Your City"
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              style={{
                width: "200px",
                height: "15px",
                fontSize: "15px",
                padding: "10px",
                color: "black",
                borderColor: "black",
                backgroundColor: "whitesmoke",
                border: "0.5px solid",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            />
            <input
              type="text"
              placeholder="Enter Your PinCode"
              onChange={(e) =>
                setAddress({ ...address, pinCode: e.target.value })
              }
              style={{
                width: "200px",
                height: "15px",
                fontSize: "15px",
                padding: "10px",
                color: "black",
                borderColor: "black",
                backgroundColor: "whitesmoke",
                border: "0.5px solid",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            />
            <input
              type="text"
              placeholder="Enter Your State"
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
              style={{
                width: "200px",
                height: "15px",
                fontSize: "15px",
                padding: "10px",
                color: "black",
                borderColor: "black",
                backgroundColor: "whitesmoke",
                border: "0.5px solid",
                borderRadius: "5px",
              }}
            />
            <button
              onClick={submitHandler}
              style={{
                width: "100px",
                height: "35px",
                fontSize: "15px",
                border: "1px solid var(--color-light)",
                backgroundColor: "deepskyblue",
                color: "white",
                marginTop: "20px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
