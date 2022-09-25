import React, { useEffect } from "react";
import RadTestRow from "./RadTestRow";
import "../../../App.css";
import "./ManageRadTest.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRadTests } from "../../../actions/radTestActions";

const ManageRadTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, radTestList } = useSelector((state) => state.radTests);

  useEffect(() => {
    dispatch(getRadTests());
  }, [dispatch]);
  return (
    <div className="manage-package">
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addRadTest")}
          className="add-btn"
        >
          + Add Radiology Test
        </button>
      </p>
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
            {radTestList &&
              radTestList.map((data) => <RadTestRow data={data} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageRadTest;
