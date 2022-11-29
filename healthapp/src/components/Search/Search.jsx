import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PopularPakages from "../../DesktopPages/PopularPakages";
import "./search.css";

const Search = () => {
  const { keyword } = useParams();
  const [filterdData, setFilteredData] = useState({});
  useEffect(() => {
    const srch = async () => {
      const { data } = await axios.get(`/test/filter/${keyword}`);
      console.log(data);
      setFilteredData(data);
    };
    srch();
  }, [keyword]);
  const [active, setActive] = useState(false);

  return (
    <div className="search">
      <div className="search_opt">
        <div className="search-packages" onClick={() => setActive(false)}>
          Packages
        </div>
        <div className="search_tests" onClick={() => setActive(true)}>
          Tests
        </div>
      </div>
      {active == false ? (
        <div className="srch-pack">
          {filterdData.packages?.length > 0 ? (
            filterdData.packages?.map((data, index) => (
              <div key={data.title + index}>
                <PopularPakages
                  offPercentage="30"
                  data={data}
                  type="packages"
                />
              </div>
            ))
          ) : (
            <div>No Packages available</div>
          )}
        </div>
      ) : (
        <div className="srch-test">
          {filterdData.tests?.length > 0 ? (
            filterdData.tests?.map((data, index) => (
              <div key={data.title + index}>
                <PopularPakages offPercentage="30" data={data} type="tests" />
              </div>
            ))
          ) : (
            <div>No Tests available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
