import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createScrollmenu } from "../../../actions/appearanceActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "./AddScrollmenu.css";

const AddScrollmenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imgName, setImgName] = useState("");
  const handleAddScrollmenu = async (e) => {
    e.preventDefault();

    dispatch(createScrollmenu(data, navigate));
  };
  const [data, setData] = useState({
    title: "",
    icon: "",
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
      icon: info[0],
    });
  };
  return (
    <div className="add_banner">
      <CustomLink title={"Back to Scroll menu"} />
      <FormHeading>Add Scrollmenu</FormHeading>
      <form onSubmit={handleAddScrollmenu}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
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
          Add Scrollmenu
        </button>
      </form>
    </div>
  );
};

export default AddScrollmenu;
