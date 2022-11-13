import React, { useState } from "react";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import "../../Manage/ManagePackage/AddPackage.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { uploadReports } from "../../../actions/orderActions";

const UploadReports = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loc = useLocation();
  const info = loc.state;
  const handleUploadRoutes = async (e) => {
    e.preventDefault();
    dispatch(uploadReports({ ...info.order, ...rep }));
    navigate("/dashboard/orders");
  };
  const [rep, setRep] = useState({
    report: "",
    eReport: "",
  });
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await axios.post("/upload", formData);
    console.log(data);
    setRep({
      ...rep,
      report: data[0],
    });
  };
  const uploadEFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);

    const { data } = await axios.post("/upload", formData);
    console.log(data);
    setRep({
      ...rep,
      eReport: data[0],
    });
  };
  return (
    <div className="add_package">
      <CustomLink title={"Back to Manage Orders"} />
      <FormHeading>Upload Reports</FormHeading>
      <form onSubmit={handleUploadRoutes}>
        <input
          type="file"
          name="Report"
          placeholder="Report"
          onChange={uploadFileHandler}
        />
        <input
          type="file"
          name="E-Report"
          placeholder="E-Report"
          onChange={uploadEFileHandler}
        />

        <button type="submit" className="add_package_btn">
          Upload Reports
        </button>
      </form>
    </div>
  );
};

export default UploadReports;
