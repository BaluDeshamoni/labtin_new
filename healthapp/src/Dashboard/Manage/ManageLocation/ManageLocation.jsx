import React, { useEffect } from "react";
import "../../../App.css";
import "../ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../../actions/packageActions";

const ManageLocations = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { locationList } = useSelector((state) => state.locations);
  console.log(locationList);
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addLocation")}
          className="add-btn"
        >
          + Add Location
        </button>
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {locationList &&
              locationList.map((d, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{d.city}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageLocations;
