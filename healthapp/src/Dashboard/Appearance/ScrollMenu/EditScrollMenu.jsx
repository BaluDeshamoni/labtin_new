import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";
import { useDispatch } from "react-redux";
import { editScrollMenu } from "../../../actions/appearanceActions";

const EditScrollMenu = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { title, id, menu, present, type } = state;
  console.log(state);
  const handleEditTest = async (e) => {
    e.preventDefault();

    dispatch(editScrollMenu(data, navigate));
  };
  const [data, setData] = useState({
    id,
    present,
    type,
    menu,
    title,
  });

  return (
    <div className="add_package">
      <CustomLink title={"Back to Labs and packages"} />
      <FormHeading>Edit Scroll Menu</FormHeading>
      <h1>{menu.title}</h1>
      {present ? (
        <h1 onClick={handleEditTest}>
          Remove {title} from {menu.title}
        </h1>
      ) : (
        <h1 onClick={handleEditTest}>
          Add {title} to {menu.title}
        </h1>
      )}
    </div>
  );
};

export default EditScrollMenu;
