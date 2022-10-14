import { useEffect } from "react";
import "../../App.css";
import "../../Dashboard/Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import "./MyInfo.css";
import { getMyOrders } from "../../actions/orderActions";

const MyBookings = () => {
  const dispatch = useDispatch();
  const { myOrders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);
  console.log(myOrders);
  return (
    <div className="myBookings">
      {myOrders.map((data, index) => (
        <div className="orderSummary_box">
          <h3 className="headingOrder">Order No #0{index + 1}</h3>
          <h3 className="patientName">
            {data.orderedFor.name}{" "}
            <span style={{ fontSize: "80%" }}>
              {data.orderedFor.age}/{data.orderedFor.sex[0]}
            </span>
          </h3>
          <div className="pakageName">
            <h3>{data.orderedItem.item}</h3>
            <h3>10-12hr fasting is Required</h3>
          </div>
          <div className="pakageAvialability">
            <p>Pickup Scheduled on</p>
            <h3>{data.orderedOn}</h3>
            <p>Sample Collection Address</p>
            <h3>
              {data.address.place},{data.address.city},{data.address.state},
            </h3>
          </div>
          <div class="progress-track">
            <ul id="progressbar">
              <li
                class={`step0 ${data.status >= 1 ? "active" : ""}`}
                id="step1"
              >
                <p className="sec_text1">Ordered</p>
              </li>
              <li
                class={`step0 ${data.status >= 2 ? "active" : ""} text-center`}
                id="step2"
              >
                <p className="sec_text2">Shipped</p>
              </li>
              <li
                class={`step0 ${data.status >= 3 ? "active" : ""} text-right`}
                id="step3"
              >
                <p className="sec_text3">On the way</p>
              </li>
              <li
                class={`step0 ${data.status >= 4 ? "active" : ""} text-right`}
                id="step4"
              >
                <p className="sec_text4">Delivered</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
