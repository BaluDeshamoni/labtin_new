import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../../actions/packageActions";

const LabPackages = ({ lab, name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, packageList } = useSelector((state) => state.packages);
  console.log(packageList);
  const lab_packages = packageList.filter((p) =>
    p.availableIn.map((d) => d.lab).includes(lab)
  );
  console.log(lab_packages);
  const packages =
    lab_packages.length > 0
      ? packageList.filter(
          (p) => !p.availableIn.map((d) => d.lab).includes(lab)
        )
      : packageList;
  useEffect(() => {
    dispatch(getPackages());
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
                <th>Parameters</th>
                <th>Original Price</th>
                <th>Discount Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {lab_packages &&
                lab_packages.map(
                  ({ _id, title, details, parameters, availableIn }) => (
                    <tr>
                      <td>{title}</td>
                      <td>{details}</td>
                      <td>{parameters}</td>
                      <td>
                        {availableIn.find((f) => f.lab === lab).originalPrice}
                      </td>
                      <td>
                        {availableIn.find((f) => f.lab === lab).discountPrice}
                      </td>
                      <td
                        onClick={() =>
                          navigate("/dashboard/editPackage", {
                            state: {
                              lab,
                              name,
                              _id,
                              title,
                              details,
                              parameters,
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
                  )
                )}
              {packages &&
                packages.map(({ _id, title, details, parameters }) => (
                  <tr>
                    <td>{title}</td>
                    <td>{details}</td>
                    <td>{parameters}</td>
                    <td>0</td>
                    <td>0</td>
                    <td
                      onClick={() =>
                        navigate("/dashboard/editPackage", {
                          state: {
                            lab,
                            name,
                            _id,
                            title,
                            details,
                            parameters,
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

export default LabPackages;
