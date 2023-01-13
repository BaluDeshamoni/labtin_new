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

      setFilteredData(data);
    };
    srch();
  }, [keyword]);

  return (
    <div className="search">
      <div className="search_opt">
        <div className="search_tests">Tests</div>
      </div>
      <div className="srch-test">
        {filterdData.tests?.length > 0 ? (
          filterdData.tests?.map((data, index) =>
            data.availableIn.length > 0 ? (
              <div key={data.title + index}>
                <PopularPakages offPercentage="30" data={data} type="tests" />
              </div>
            ) : null
          )
        ) : (
          <div>No Tests available</div>
        )}
      </div>
      <div className="search_opt">
        <div className="search-packages">Packages</div>
      </div>
      <div className="srch-pack">
        {filterdData.packages?.length > 0 ? (
          filterdData.packages?.map((data, index) =>
            data.availableIn.length > 0 ? (
              <div key={data.title + index}>
                <PopularPakages
                  offPercentage="30"
                  data={data}
                  type="packages"
                />
              </div>
            ) : null
          )
        ) : (
          <div>No Packages available</div>
        )}
      </div>
    </div>
  );
};

export default Search;
