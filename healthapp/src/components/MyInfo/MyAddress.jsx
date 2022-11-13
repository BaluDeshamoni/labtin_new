import { useEffect } from "react";
import "../../App.css";
import "../../Dashboard/Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../actions/userActions";
import "./MyInfo.css";

const MyAddress = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userDetails);
  const address = user.address;
  useEffect(() => {
    if (!user._id) {
      dispatch(userDetails());
    }
  }, [dispatch]);

  return (
    <div className="myBookings">
      {address?.map((data, index) => (
        <div className="orderSummary_box">
          <h3 className="headingOrder">Address No #0{index + 1}</h3>
          <h3 className="patientName">Street : {data.place}</h3>
          <div className="pakageName">
            <h3>
              {data.city}
              {" , "}
              {data.state}
              {" , "}
              {data.pinCode}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAddress;
