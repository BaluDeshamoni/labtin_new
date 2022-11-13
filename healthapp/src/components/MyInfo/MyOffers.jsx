import { useEffect } from "react";
import "../../App.css";
import "../../Dashboard/Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { getDiscounts } from "../../actions/packageActions";
import "./MyInfo.css";

const MyOffers = () => {
  const dispatch = useDispatch();
  const { discountList } = useSelector((state) => state.discounts);

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  return (
    <div className="myOffers">
      {discountList.map((data, index) => (
        <div className="orderSummary_box">
          <h3 className="headingOrder">Offer No #0{index + 1}</h3>
          <h3 className="offerName">
            Name : <span>{data.name}</span>
          </h3>
          <div className="offerDetails">
            <h3>
              PromoCode : <span>{data.promoCode}</span>
            </h3>
            <h3>
              Discount : <span>{data.discountPercentage}%</span>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOffers;
