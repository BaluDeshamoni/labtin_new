import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createBanner } from "../../../actions/appearanceActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "./AddBanner.css";

const AddBanner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imgName, setImgName] = useState("");
  const handleAddBanner = async (e) => {
    e.preventDefault();

    dispatch(createBanner(data, navigate));
  };
  const [data, setData] = useState({
    title: "",
    secTitle: "",
    img: "",
    description: "",
  });

  const uploadFileHandler = async (e) => {
    setImgName(e.target.files[0].name);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const { data: info } = await axios.post("/upload", formData);
    console.log(info[0]);
    setData({
      ...data,
      img: info[0],
    });
  };
  return (
    <div className="add_banner">
      <CustomLink title={"Back to Slide Show"} />
      <FormHeading>Add Banner</FormHeading>
      <form onSubmit={handleAddBanner}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <input
          type="text"
          name="secondaryTitle"
          placeholder="Secondary Title"
          value={data.secTitle}
          onChange={(e) => setData({ ...data, secTitle: e.target.value })}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
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
          Add Banner
        </button>
      </form>
    </div>
  );
};

export default AddBanner;
