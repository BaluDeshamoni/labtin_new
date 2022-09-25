import React, { useEffect } from "react";
import "./Scrollmenu.css";
import "../../../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getScrollmenus } from "../../../actions/appearanceActions";
import ScrollmenuRow from "./ScrollmenuRow";

const ScrollMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { scrollmenuList } = useSelector((state) => state.scrollmenus);
  console.log(scrollmenuList);

  useEffect(() => {
    dispatch(getScrollmenus());
  }, [dispatch]);

  return (
    <div className="slide-show">
      {/* <AddPackage /> */}
      <p className="btn-container">
        <button
          onClick={() => navigate("/dashboard/addscrollmenu")}
          className="add-btn"
        >
          + Add scrollmenu
        </button>
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>icon</th>
              <th>Title</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {scrollmenuList &&
              scrollmenuList.map((banner) => <ScrollmenuRow banner={banner} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScrollMenu;
