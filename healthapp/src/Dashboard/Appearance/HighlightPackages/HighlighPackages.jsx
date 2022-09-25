import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../../actions/packageActions";
import HighlightPackageRow from "./HighlightPackageRow";

const HighlightPackages = () => {
  const dispatch = useDispatch();

  const { packageList } = useSelector((state) => state.packages);
  const highlightPackages = packageList.filter((d) => d.isHighlight);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Parameters</th>
              <th>Original Price</th>
              <th>Discount Price</th>
              {/* <th>Action</th> */}
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
