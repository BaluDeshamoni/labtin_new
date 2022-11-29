import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import LabTests from "./LabTests";
import LabPackages from "./LabPackages";
import { useLocation, useNavigate } from "react-router-dom";
import FormHeading from "../../../components/FormHeading";

const LabsAndPackages = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const [active, setactive] = useState(state.type == true ? "tests" : "labs");
  return (
    <>
      <FormHeading>{state.title}</FormHeading>
      <div className="manage-package">
        <div className="labs_options">
          <p onClick={() => navigate("/dashboard/managePartnerLabs")}>
            Back to Manage labs
          </p>
          <p
            className={`labs_${active == "labs" && "active"}`}
            onClick={() => setactive("labs")}
          >
            Packages
          </p>
          <p
            className={`tests_${active == "tests" && "active"}`}
            onClick={() => setactive("tests")}
          >
            Tests
          </p>
        </div>
        {active == "tests" ? (
          <LabTests lab={state} />
        ) : (
          <LabPackages lab={state} />
        )}
      </div>
    </>
  );
};

export default LabsAndPackages;
