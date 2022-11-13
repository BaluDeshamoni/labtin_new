import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../../actions/packageActions";
import HighlightPackageRow from "./HighlightPackageRow";
import { useNavigate } from "react-router-dom";

const HighlightPackages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { packageList } = useSelector((state) => state.packages);
  const highlightPackages = packageList.filter((d) => d.isHighlight);
  console.log(packageList);
  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addHighlightPackage")}
          className="add-btn"
        >
          + Add Highlight Package
        </button>
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {highlightPackages.map((singlePackage) => (
              <HighlightPackageRow singlePackage={singlePackage} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighlightPackages;
