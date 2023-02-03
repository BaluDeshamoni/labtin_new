import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTest } from "../../../actions/testActions";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "./AddTest.css";

const AddTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddTest = async (e) => {
    e.preventDefault();

    dispatch(createTest(data, navigate));
  };
  const [data, setData] = React.useState({
    title: "",
    details: "",
    requirements: "",
  });
  return (
    <div className="add_package">
      <CustomLink title={"Back to Manage Test"} />
      <FormHeading>Add New Test</FormHeading>
      <form onSubmit={handleAddTest}>
        <input
          type="text"
          name="title"
          placeholder="test Title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          name="detail"
          placeholder="test Details"
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />
        <input
          type="text"
          name="requirements"
          placeholder="test requirements"
          onChange={(e) => setData({ ...data, requirements: e.target.value })}
        />
        <button type="submit" className="add_package_btn">
          Add Test
        </button>
      </form>
    </div>
  );
};

export default AddTest;
