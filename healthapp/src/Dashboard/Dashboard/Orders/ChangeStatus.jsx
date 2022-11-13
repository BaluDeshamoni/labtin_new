import "../../Manage/ManagePackage/AddPackage.css";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { changeStatus } from "../../../actions/orderActions";
import { useState } from "react";
import CustomLink from "../../../components/CustomLink";
import FormHeading from "../../../components/FormHeading";

const ChangeStatus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loc = useLocation();
  const info = loc.state;
  const l = ["Ordered", "Shipped", "On the way", "Delivered"];
  const [stat, setStat] = useState();

  const handlecheckbox = (e) => {
    setStat(e.target.value);
  };
  const okHandler = async (e) => {
    e.preventDefault();
    dispatch(changeStatus({ ...info.order, status: stat }));
    navigate("/dashboard/orders");
  };

  return (
    <div className="add_package">
      <CustomLink title={"Back to Manage Orders"} />
      <FormHeading>Change Status</FormHeading>
      <div className="thanku_info">
        {l.map((d, index) => (
          <div className="status_opt">
            <p>{d}</p>
            <input
              className="selectLabRadio"
              type="radio"
              onClick={handlecheckbox}
              name="rad"
              value={index + 1}
            />
          </div>
        ))}
      </div>
      <button
        onClick={okHandler}
        style={{
          width: "100px",
          height: "35px",
          fontSize: "15px",
          border: "1px solid var(--color-light)",
          backgroundColor: "deepskyblue",
          color: "white",
          marginTop: "20px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        Update
      </button>
    </div>
  );
};

export default ChangeStatus;
