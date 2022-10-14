import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../ManagePackage/AddPackage.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import { useDispatch } from "react-redux";
import { editPackage } from "../../../actions/labActions";
import { getPackages } from "../../../actions/packageActions";

const EditPackage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const {
    lab,
    name,
    _id,
    title,
    details,
    parameters,
    originalPrice,
    discountPrice,
    present,
  } = state;

  const handleEditPackage = async (e) => {
    e.preventDefault();

    dispatch(editPackage(data, navigate));
    dispatch(getPackages());
  };
  const [data, setData] = useState({
    lab,
    name,
    _id,
    title,
    details,
    parameters,
    originalPrice,
    discountPrice,
    present,
  });

  return (
    <div className="add_package">
      <CustomLink title={"Back to Labs and packages"} />
      <FormHeading>Edit Package</FormHeading>
      <form onSubmit={handleEditPackage}>
        <input
          type="text"
          name="title"
          placeholder="Package Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <textarea
          name="detail"
          placeholder="Package Details"
          value={data.details}
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />

        <input
          type="number"
          name="parameters"
          placeholder="Parameters"
          value={data.parameters}
          onChange={(e) => setData({ ...data, parameters: e.target.value })}
        />
        <input
          type="number"
          name="originalPrice"
          placeholder="Original Price"
          value={data.originalPrice}
          onChange={(e) => setData({ ...data, originalPrice: e.target.value })}
        />
        <input
          type="number"
          name="discountPrice"
          placeholder="Discount Price"
          value={data.discountPrice}
          onChange={(e) => setData({ ...data, discountPrice: e.target.value })}
        />

        <button type="submit" className="add_package_btn">
          Edit Package
        </button>
      </form>
    </div>
  );
};

export default EditPackage;
