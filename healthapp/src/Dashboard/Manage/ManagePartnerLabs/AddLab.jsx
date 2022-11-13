import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLab } from "../../../actions/labActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "./AddLab.css";

const AddLab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddLab = async (e) => {
    e.preventDefault();

    dispatch(createLab(data, navigate));
  };

  const [imgName, setImgName] = useState("");
  const uploadFileHandler = async (e) => {
    setImgName(e.target.files[0].name);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const { data: info } = await axios.post("/upload", formData);
    console.log(info[0]);
    setData({
      ...data,
      logo: info[0],
    });
  };
  const [data, setData] = useState({
    title: "",
    logo: "",
    accrediation: "",
    time: "",
    state: "",
  });
  return (
    <div className="add_package">
      <CustomLink title={"Back to Manage Lab"} />
      <FormHeading>Add New Lab</FormHeading>
      <form onSubmit={handleAddLab}>
        <input
          type="text"
          name="title"
          placeholder="Lab Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <input
          type="text"
          name="accrediation"
          placeholder="Accrediation"
          onChange={(e) => setData({ ...data, accrediation: e.target.value })}
        />
        <input
          type="text"
          name="time"
          placeholder="time"
          onChange={(e) => setData({ ...data, time: e.target.value })}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={(e) => setData({ ...data, state: e.target.value })}
        />
        <label htmlFor="bannerImage" className="banner_input">
          {imgName ? "" : "Browse Image..."}
          <input
            onChange={uploadFileHandler}
            style={{ display: "none" }}
            type="file"
            name="bannerImage"
            id="bannerImage"
          />
          {imgName && <span className="img_name">{imgName}</span>}
        </label>
        <button type="submit" className="add_package_btn">
          Add Lab
        </button>
      </form>
    </div>
  );
};

export default AddLab;
