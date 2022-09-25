import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";

const CustomerComplaints = () => {
  const navigate = useNavigate();
  const complaints = [
    {
      _id: 1,
      Customer: "Customer 1",
      details:
        "details details details details details details details details details details details details details details",
    },
    {
      _id: 2,
      Customer: "Customer 2",
      details:
        "details details details details details details details details details details details details details details",
    },
    {
      _id: 3,
      Customer: "Customer 3",
      details:
        "details details details details details details details details details details details details details details",
    },
    {
      _id: 4,
      Customer: "Customer 4",
      details:
        "details details details details details details details details details details details details details details",
    },
    {
      _id: 5,
      Customer: "Customer 5",
      details:
        "details details details details details details details details details details details details details details",
    },
  ];

  return (
    <div className="manage-package">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map(({ Customer, details }) => (
              <tr>
                <td>{Customer}</td>

                <td>{details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerComplaints;
