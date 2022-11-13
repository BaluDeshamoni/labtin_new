import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import axios from "axios";
import gallery from "../image/gallery.png";

const RegisterUser = () => {
  const [sex, setSex] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const loc = useLocation();
  const data = loc.state;

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register({ name, age, sex, img, number: data }));
  };
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await axios.post("/upload", formData);
    console.log(data);

    setImg(data[0]);
  };

  return (
    <div className="login_main_div">
      <div className="login_main">
        <div className="login_form">
          <div className="login_form_entry">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline",
              }}
            >
              <img
                src={img ? img : gallery}
                onClick={handleClick}
                height={70}
              ></img>
              <input
                type="file"
                multiple
                ref={hiddenFileInput}
                style={{ display: "none" }}
                onChange={uploadFileHandler}
              />
            </div>
          </div>
          <div className="login_form_entry">
            <label htmlFor="UsersName">Name</label>
            <input
              type="text"
              name="UsersName"
              id="UsersName"
              placeholder="Ex - Shreyas Kumar"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="login_form_entry">
            <label htmlFor="UsersName">Sex</label>
            <input
              type="text"
              name="Sex"
              id="Sex"
              placeholder="Ex - male"
              onChange={(e) => setSex(e.target.value)}
            />
          </div>
          <div className="login_form_entry">
            <label htmlFor="UsersName">Age</label>
            <input
              type="text"
              name="Age"
              id="Age"
              placeholder="Ex - 18"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>
        <button className="submitButton" onClick={submitHandler}>
          Continue
        </button>
      </div>
      {error ? <p className="wError">{error}</p> : null}
    </div>
  );
};

export default RegisterUser;
