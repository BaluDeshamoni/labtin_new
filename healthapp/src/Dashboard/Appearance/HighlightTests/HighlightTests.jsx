import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import HighlightTestRow from "./HighlightTestRow";
import { getTests } from "../../../actions/testActions";
import { useNavigate } from "react-router-dom";

const HighlightTests = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { testList } = useSelector((state) => state.tests);
  const highlightTests = testList.filter((d) => d.isHighlight);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addHighlightTest")}
          className="add-btn"
        >
          + Add Highlight Test
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
            {highlightTests.map((singlePackage) => (
              <HighlightTestRow singlePackage={singlePackage} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighlightTests;
