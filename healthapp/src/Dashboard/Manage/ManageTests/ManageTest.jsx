import React, { useEffect } from "react";
import TestRow from "./TestRow";
import "../../../App.css";
import "./ManageTest.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../../actions/testActions";

const ManageTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, testList } = useSelector((state) => state.tests);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
  return (
    <div className="manage-package">
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addTest")}
          className="add-btn"
        >
          + Add Test
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
            {testList && testList.map((data) => <TestRow data={data} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTest;
