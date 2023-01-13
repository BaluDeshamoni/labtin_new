import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PopularPakages from "../../DesktopPages/PopularPakages";
import "./scroll.css";

const Scroll = () => {
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

  return (
    <div className="search">
      <div className="search_opt">
        <div className="search_tests">Tests</div>
      </div>
      <div className="srch-test">
        {menu_tests.length > 0 ? (
          menu_tests?.map((data, index) => (
            <div key={data.title + index}>
              <PopularPakages offPercentage="30" data={data} type="tests" />
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
        {menu_packages.length > 0 ? (
          menu_packages?.map((data, index) => (
            <div key={data.title + index}>
              <PopularPakages offPercentage="30" data={data} type="packages" />
            </div>
          ))
        ) : (
          <div>No Packages available</div>
        )}
      </div>
    </div>
  );
};

export default Scroll;
