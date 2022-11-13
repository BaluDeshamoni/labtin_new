import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../../../actions/userActions";

const CustomerComplaints = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { complaintList } = useSelector((state) => state.complaints);
  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addComplaint")}
          className="add-btn"
        >
          + Add Complaint
        </button>
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Mobile Number</th>
              <th>Complaint</th>
            </tr>
          </thead>
          <tbody>
            {complaintList &&
              complaintList.map(({ customer, number, complaint }) => (
                <tr>
                  <td>{customer}</td>
                  <td>{number}</td>
                  <td>{complaint}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerComplaints;
