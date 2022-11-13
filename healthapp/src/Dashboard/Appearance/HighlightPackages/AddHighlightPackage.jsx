import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../../actions/packageActions";
import HighlightPackageRow from "./HighlightPackageRow";
import { useNavigate } from "react-router-dom";
import CustomLink from "../../../components/CustomLink";
import { addHighlightPackage } from "../../../actions/appearanceActions";

const AddHighlightPackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { packageList } = useSelector((state) => state.packages);
  const nonHighlightPackages = packageList.filter((d) => !d.isHighlight);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <CustomLink title={"Back to Manage HighLight Packages"} />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {nonHighlightPackages.map((d) => (
              <tr>
                <td>{d.title}</td>
                <td>{d._id}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(addHighlightPackage(d._id, navigate))
                    }
                    className="delete-btn"
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddHighlightPackage;
