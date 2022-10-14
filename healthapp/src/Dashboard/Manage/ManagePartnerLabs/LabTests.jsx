import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../../actions/testActions";

const LabTests = ({ lab, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, testList } = useSelector((state) => state.tests);
  console.log(testList);
  const lab_tests = testList.filter((p) =>
    p.availableIn.map((d) => d.lab).includes(lab)
  );
  console.log(lab_tests);
  const tests =
    lab_tests.length > 0
      ? testList.filter((p) => !p.availableIn.map((d) => d.lab).includes(lab))
      : testList;
  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
  return (
    <>
      <div className="manage-package">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Details</th>
                <th>Original Price</th>
                <th>Discount Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {lab_tests &&
                lab_tests.map(({ _id, title, details, availableIn }) => (
                  <tr>
                    <td>{title}</td>
                    <td>{details}</td>
                    <td>
                      {availableIn.find((f) => f.lab === lab).originalPrice}
                    </td>
                    <td>
                      {availableIn.find((f) => f.lab === lab).discountPrice}
                    </td>
                    <td
                      onClick={() =>
                        navigate("/dashboard/editTest", {
                          state: {
                            lab,
                            name,
                            _id,
                            title,
                            details,
                            originalPrice: availableIn.find(
                              (f) => f.lab === lab
                            ).originalPrice,
                            discountPrice: availableIn.find(
                              (f) => f.lab === lab
                            ).discountPrice,
                            present: true,
                          },
                        })
                      }
                    >
                      edit
                    </td>
                  </tr>
                ))}
              {tests &&
                tests.map(({ _id, title, details }) => (
                  <tr>
                    <td>{title}</td>
                    <td>{details}</td>

                    <td>0</td>
                    <td>0</td>
                    <td
                      onClick={() =>
                        navigate("/dashboard/editTest", {
                          state: {
                            lab,
                            name,
                            _id,
                            title,
                            details,
                            originalPrice: 0,
                            discountPrice: 0,
                            present: false,
                          },
                        })
                      }
                    >
                      edit
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LabTests;
