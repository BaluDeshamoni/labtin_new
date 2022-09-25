import React, { useEffect } from "react";
import "./SlideShow.css";
import "../../../App.css";
import BannerRow from "./BannerRow";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../../../actions/appearanceActions";

const SlideShow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { bannerList } = useSelector((state) => state.banners);
  console.log(bannerList);

  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);

  return (
    <div className="slide-show">
      {/* <AddPackage /> */}
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addBanner")}
          className="add-btn"
        >
          + Add Banner
        </button>
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Banner</th>
              <th>Title</th>
              <th>Secondary Title</th>
              <th>Description</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {bannerList &&
              bannerList.map((banner) => <BannerRow banner={banner} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SlideShow;
