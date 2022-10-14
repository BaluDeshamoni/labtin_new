import { Close } from "@mui/icons-material";
import { useState, useRef } from "react";
import "./AddUser.css";
import gallery from "../image/gallery.png";
import { useDispatch } from "react-redux";

import axios from "axios";
import { addUser } from "../actions/userActions";

function AddUser(props) {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    age: "",
    sex: "",
    img: "",
  });

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
    setUser({
      ...user,
      img: data[0],
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(user));

    props.onClose();
    setUser({ name: "", age: "", sex: "", img: "" });
  };
  if (!props.visibility) {
    return null;
  }
  return (
    <div className="dialog_body">
      <div>
        <div
          className="close_button"
          onClick={async () => {
            setUser({ name: "", age: "", sex: "", img: "" });
            props.onClose();
          }}
        >
          <Close />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <img
              src={user.img ? user.img : gallery}
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
            <p>Enter Your Details</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
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
              placeholder="Enter Your Age"
              onChange={(e) => setUser({ ...user, age: e.target.value })}
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
              placeholder="Enter Your Sex"
              onChange={(e) => setUser({ ...user, sex: e.target.value })}
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

export default AddUser;
