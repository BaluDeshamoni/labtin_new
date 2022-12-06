import "./ListPakage.css";
import { useLocation } from "react-router-dom";
import DSlider from "../components/DSlider";
import PopularPakages from "./PopularPakages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPackages } from "../actions/packageActions";
import { getTests } from "../actions/testActions";

const ListPakage = () => {
  const { filter } = useSelector((state) => state.filter);
  console.log(filter);
  const { state } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackages());
    dispatch(getTests());
  }, [dispatch]);
  const { packageList } = useSelector((state) => state.packages);
  const { testList } = useSelector((state) => state.tests);
  const tests = testList.filter((f) =>
    f.availableIn
      .map((m) => m.stateName?.toLowerCase())
      .includes(filter?.toLowerCase())
  );
  const packages = packageList.filter((f) =>
    f.availableIn
      .map((m) => m.stateName?.toLowerCase())
      .includes(filter?.toLowerCase())
  );
  const list = state?.name == "HealthPakages" ? packages : tests;
  return (
    <div className="pakages_main">
      <div className="third_section desktopElement">
        <DSlider />
      </div>
      <div className="pakages_main_div">
        <h2>{state?.name}</h2>
        <div className="pakages_grid">
          {list.map((data) => (
            <PopularPakages offPercentage="30" data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPakage;
