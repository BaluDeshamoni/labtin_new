import React, { useEffect } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import HighlightTestRow from "./HighlightTestRow";
import { getTests } from "../../../actions/testActions";

const HighlightTests = () => {
  const dispatch = useDispatch();

  const { testList } = useSelector((state) => state.tests);
  const highlightTests = testList.filter((d) => d.isHighlight);

  useEffect(() => {
    dispatch(getTests());
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
