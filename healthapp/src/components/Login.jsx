import React, { useEffect, useState } from "react";
import "./Login.css";
import Logo from "../image/LabtinLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import axios from "axios";

const Login = ({ history }) => {
  const [num, setNum] = useState("");
  const [active, setActive] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [genOtp, setGenOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [disableOtpButton, setDisableOtpButton] = useState(false);
  const [disableTimer, setDisableTimer] = useState();
  const navigate = useNavigate();
  let myInterval,
    disableOTPmilliseconds = 5000;
  const getOtp = async () => {
    var otp = Math.floor(1000 + Math.random() * 9000);
    setGenOtp(otp);
    // await axios.get(
    //   `https://api.authkey.io/request?authkey=443da4c3126af704&mobile=${num}&country_code=+91&sid=6030&otp=${otp}&company=Labtin Diagnostics`
    // );
    console.log(otp);
    setActive(true);
    setDisableOtpButton(true);

    myInterval = setInterval(() => {
      return setDisableTimer((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      setDisableOtpButton(false);
      setDisableTimer(disableOTPmilliseconds / 1000);

      clearInterval(myInterval);
    }, disableOTPmilliseconds);
  };
  const verify = async () => {
    const { data } = await axios.get(`users/verify/${num}`);
    console.log(data);

    data.status
      ? dispatch(login(num))
      : navigate("/RegisterUser", { state: num });
  };

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    enteredOtp == genOtp ? verify() : setMsg("Wrong OTP");
  };

  return (
    <div className="login_main_div">
      <div className="login_main">
        <div className="login_heading">
          <h1>Welcome Back!</h1>
        </div>
        <div className="login_form">
          <div className="login_form_entry">
            <label htmlFor="email">Phone Number</label>
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <button onClick={getOtp} disabled={disableOtpButton}>
              Get Otp
            </button>
            {disableOtpButton && <p>Resend otp in 30sec</p>}
          </div>
          {active && (
            <div className="login_form_entry">
              <label htmlFor="userPassword">Otp</label>
              <input
                type="text"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
              />
              <button className="submitButton" onClick={submitHandler}>
                Login / Sign Up
              </button>
            </div>
          )}
          {/* <div className="signUp_sec">
            <p>Don't have a account? </p>
            <Link to="/Register"> SignUp</Link>
          </div> */}
        </div>
        <div className="header_logo loginfooter">
          <img src={Logo} onClick={() => navigate("/")} alt="Logo" />
        </div>
      </div>
      {msg && <h3 className="wError">{msg}</h3>}
      {error ? <p className="wError">{error}</p> : null}
    </div>
  );
};

export default Login;
