import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";
import "../../Dashboard/Manage/ManagePackage/ManagePackage.css";
import "./MyInfo.css";

const Otp = () => {
  const [num, setNum] = useState("");
  const [active, setActive] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [genOtp, setGenOtp] = useState("");
  const [msg, setMsg] = useState("");

  const getOtp = async () => {
    var otp = Math.floor(1000 + Math.random() * 9000);
    setGenOtp(otp);
    await axios.get(
      `https://api.authkey.io/request?authkey=443da4c3126af704&mobile=${num}&country_code=+91&sid=6030&otp=${otp}`
    );
    setActive(true);
  };

  return (
    <div className="myBookings">
      <div className="orderSummary_box">
        <h3 className="headingOrder">Otp</h3>
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button onClick={getOtp}>Get Otp</button>
        {active && (
          <div>
            <input
              type="text"
              value={enteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
            <button
              onClick={() => {
                enteredOtp == genOtp
                  ? setMsg("verified")
                  : setMsg("Not verified");
              }}
            >
              verify Otp
            </button>
            {msg && <h3>{msg}</h3>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Otp;
