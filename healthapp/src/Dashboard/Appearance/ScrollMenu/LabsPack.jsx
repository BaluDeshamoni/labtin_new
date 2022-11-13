import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import Labtests from "./Labtests";
import Labpackages from "./Labpackages";
import { useLocation, useNavigate } from "react-router-dom";
import FormHeading from "../../../components/FormHeading";

const LabsPack = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [active, setactive] = useState(state.type == true ? "tests" : "labs");
  return (
    <>
      <FormHeading>{state.title}</FormHeading>
      <div className="manage-package">
        <div className="labs_options">
          <p onClick={() => navigate("/dashboard/scrollMenu")}>
            Back to Manage Scroll Menu
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
          <Labtests menu={state} />
        ) : (
          <Labpackages menu={state} />
        )}
      </div>
    </>
  );
};

export default LabsPack;
