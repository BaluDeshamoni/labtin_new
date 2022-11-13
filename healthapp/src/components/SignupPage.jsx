import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../image/LabtinLogo.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const SignupPage = ({ history }) => {
  const [num, setNum] = useState("");
  const [active, setActive] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [genOtp, setGenOtp] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const getOtp = async () => {
    var otp = Math.floor(1000 + Math.random() * 9000);
    setGenOtp(otp);
    // await axios.get(
    //   `https://api.authkey.io/request?authkey=443da4c3126af704&mobile=${num}&country_code=+91&sid=6030&otp=${otp}&company=Labtin Diagnostics`
    // );
    console.log(otp);
    setActive(true);
  };

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    enteredOtp == genOtp
      ? navigate("/RegisterUser", { state: num })
      : setMsg("Wrong OTP");
  };

  return (
    <div className="login_main_div">
      <div className="login_main">
        <div className="login_heading">
          <h1>Welcome To Labtin</h1>
        </div>
        <div className="login_form">
          <div className="login_form_entry">
            <label htmlFor="email">Phone Number</label>
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <button onClick={getOtp}>Get Otp</button>
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
                Continue
              </button>
            </div>
          )}

          <div className="signUp_sec">
            <p>Already have a account? </p>
            <Link to="/login"> Login</Link>
          </div>
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

export default SignupPage;
