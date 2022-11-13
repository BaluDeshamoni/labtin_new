import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../../actions/testActions";
import { useNavigate } from "react-router-dom";
import CustomLink from "../../../components/CustomLink";
import { addHighlightTest } from "../../../actions/appearanceActions";

const AddHighlightTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { testList } = useSelector((state) => state.tests);
  const nonHighlightTests = testList.filter((d) => !d.isHighlight);

  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <CustomLink title={"Back to Manage HighLight Tests"} />
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
            {nonHighlightTests.map((d) => (
              <tr>
                <td>{d.title}</td>
                <td>{d.details}</td>
                <td>
                  <button
                    onClick={() => dispatch(addHighlightTest(d._id, navigate))}
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

export default AddHighlightTest;
