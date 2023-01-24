import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PopularPakages from "../../DesktopPages/PopularPakages";
import "./scroll.css";
import { Snackbar } from "@mui/material";

const Scroll = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [menuData, setMenuData] = useState();
  const { packageList } = useSelector((state) => state.packages);
  const { testList } = useSelector((state) => state.tests);
  useEffect(() => {
    const fun = async () => {
      const { data } = await axios.get(`/appearance/scrollmenu/${id}`);
      setMenuData(data);
    };
    fun();
  }, []);
  const packageIds = menuData?.packages.map((d) => d.packageId);
  const testIds = menuData?.tests.map((d) => d.testId);

  const menu_packages = packageList.filter(
    (d) => packageIds?.includes(d._id) && d.availableIn.length > 0
  );
  const menu_tests = testList.filter(
    (d) => testIds?.includes(d._id) && d.availableIn.length > 0
  );
  const { filter } = useSelector((state) => state.filter);
  const tests = menu_tests.filter((f) =>
    f.availableIn
      .map((m) => m.stateName?.toLowerCase())
      .includes(filter?.toLowerCase())
  );
  const packages = menu_packages.filter((f) =>
    f.availableIn
      .map((m) => m.stateName?.toLowerCase())
      .includes(filter?.toLowerCase())
  );

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const [cart, setCart] = useState(new Map());
  const { vertical, horizontal, open } = state;

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
    <div className="search">
      <div className="search_opt">
        <div className="search_tests">Tests</div>
      </div>
      <div className="srch-test">
        {tests.length > 0 ? (
          tests?.map((data, index) => (
            <div key={data.title + index}>
              <PopularPakages
                offPercentage="30"
                data={data}
                type="tests"
                cart={cart}
                setCart={setCart}
                state={state}
                setState={setState}
              />
            </div>
          ))
        ) : (
          <div>No Tests available</div>
        )}
      </div>
      <div className="search_opt">
        <div className="search-packages">Packages</div>
      </div>
      <div className="srch-pack">
        {packages.length > 0 ? (
          packages?.map((data, index) => (
            <div key={data.title + index}>
              <PopularPakages
                offPercentage="30"
                data={data}
                type="packages"
                cart={cart}
                setCart={setCart}
                state={state}
                setState={setState}
              />
            </div>
          ))
        ) : (
          <div>No Packages available</div>
        )}
      </div>
      <Snackbar
        sx={{ marginBottom: "5rem" }}
        className="snackbar"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message={`${cart.size} item in Cart`}
        action={action}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default Scroll;
