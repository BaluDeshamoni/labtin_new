import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLabs } from "../../../actions/labActions";
import { getLocations } from "../../../actions/packageActions";
import FormHeading from "../../../components/FormHeading";

const ManagePartnerlabs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { labList } = useSelector((state) => state.labList);
  const { locationList } = useSelector((state) => state.locations);
  useEffect(() => {
    dispatch(getLocations());
    dispatch(getLabs());
    if (locationList.length > 0) {
      setFil(locationList[0].city);
    }
  }, [dispatch, locationList.length]);
  const [fil, setFil] = useState("");
  const labs = labList.filter(
    (l) => l.state.toLowerCase() == fil.toLowerCase()
  );

  return (
    <>
      <div className="manage-package">
        <FormHeading>Manage labs</FormHeading>
        <div className="options">
          <div>
            <label id="choose" for="options">
              Add Filters
            </label>
            <br clear="all" />
            <select onChange={(e) => setFil(e.target.value)} id="options">
              {locationList.map((l) => (
                <option value={l?.city}>{l?.city}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => navigate("/dashboard/addLab")}
            className="add-btn add_lab"
          >
            + Add Lab
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>logo</th>
                <th>accrediation</th>
                <th>time</th>
                <th>state</th>
              </tr>
            </thead>
            <tbody>
              {labs &&
                labs.map(({ _id, title, logo, accrediation, time, state }) => (
                  <tr>
                    <td
                      onClick={() =>
                        navigate("/dashboard/LabsAndPackages", {
                          state: { _id, title },
                        })
                      }
                    >
                      {title}
                    </td>
                    <td>
                      <img src={logo} />
                    </td>
                    <td>{accrediation}</td>
                    <td>{time}</td>
                    <td>{state}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManagePartnerlabs;
