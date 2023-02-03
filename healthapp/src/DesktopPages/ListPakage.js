import "./ListPakage.css";
import { useLocation, useNavigate } from "react-router-dom";
import DSlider from "../components/DSlider";
import PopularPakages from "./PopularPakages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPackages } from "../actions/packageActions";
import { getTests } from "../actions/testActions";
import { Snackbar } from "@mui/material";

const ListPakage = () => {
  const navigate = useNavigate();
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
  const [stateStatus, setStateStatus] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const [cart, setCart] = useState(new Map());
  const { vertical, horizontal, open } = stateStatus;

  const handle = () => {
    const arr = [];
    for (const x of cart.values()) {
      arr.push(x.availableIn.map((m) => m.lab));
    }
    console.log(arr, "abcd");
    const result = arr.reduce((a, b) => a.filter((c) => b.includes(c)));
    console.log(result);
    result.length > 0
      ? navigate("/selectlab", {
          state: { data: cart, avail_labs: result },
        })
      : alert("Combination is not available");
  };
  const action = (
    <div
      className="checkoutButton"
      onClick={() =>
        cart.size == 1
          ? navigate("/selectlab", { state: { data: cart } })
          : handle()
      }
    >
      Show Labs
    </div>
  );
  return (
    <div className="pakages_main">
      <div className="third_section desktopElement">
        <DSlider />
      </div>
      <div className="pakages_main_div">
        <h2>{state?.name}</h2>
        <div className="pakages_grid">
          {list.map((data) => (
            <PopularPakages
              offPercentage="30"
              data={data}
              cart={cart}
              setCart={setCart}
              state={stateStatus}
              setState={setStateStatus}
            />
          ))}
        </div>
        <Snackbar
          sx={{ marginBottom: "0.3rem" }}
          className="snackbar"
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={`${cart.size} item in Cart`}
          action={action}
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
};

export default ListPakage;
