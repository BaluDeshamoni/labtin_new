import { useEffect } from "react";
import PackageRow from "./PackageRow";
import "../../../App.css";
import "./ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../../actions/packageActions";

const ManagePackage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, packageList } = useSelector((state) => state.packages);
  console.log(packageList);

  useEffect(() => {
    dispatch(getPackages());
  }, [dispatch]);

  return (
    <div className="manage-package">
      {/* <AddPackage /> */}
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addPackage")}
          className="add-btn"
        >
          + Add Package
        </button>
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Parameters</th>
            </tr>
          </thead>
          <tbody>
            {packageList &&
              packageList.map((singlePackage) => (
                <PackageRow singlePackage={singlePackage} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePackage;
