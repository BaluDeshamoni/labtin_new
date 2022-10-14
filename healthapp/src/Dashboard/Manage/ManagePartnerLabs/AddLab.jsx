import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createLab } from "../../../actions/labActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "../ManagePackage/AddPackage.css";

const AddLab = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddLab = async (e) => {
    e.preventDefault();

    dispatch(createLab(data, navigate));
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
        <textarea
          name="logo"
          placeholder="Lab logo"
          onChange={(e) => setData({ ...data, logo: e.target.value })}
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
        <button type="submit" className="add_package_btn">
          Add Lab
        </button>
      </form>
    </div>
  );
};

export default AddLab;
