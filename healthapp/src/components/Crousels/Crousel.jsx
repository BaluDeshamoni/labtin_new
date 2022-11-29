import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularPakages from "../../DesktopPages/PopularPakages";
import "./Crousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getPackages } from "../../actions/packageActions";
import { getTests } from "../../actions/testActions";
const Crousel = (props) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    useCSS: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      .includes(props?.loc?.toLowerCase())
  );
  const packages = packageList.filter((f) =>
    f.availableIn
      .map((m) => m.stateName?.toLowerCase())
      .includes(props?.loc?.toLowerCase())
  );
  const popularTests = tests.map((data, index) => {
    return (
      <div key={data.title + index}>
        <PopularPakages offPercentage="30" data={data} type="tests" />
      </div>
    );
  });
  const popularPackages = packages.map((data, index) => {
    return (
      <div key={data.title + index}>
        <PopularPakages offPercentage="30" data={data} type="packages" />
      </div>
    );
  });
  return (
    <div className="crousel_forDestop">
      <Slider {...sliderSettings}>
        {props.crousalData == "pakages" ? popularPackages : popularTests}
      </Slider>
    </div>
  );
};

export default Crousel;
