import { useEffect } from "react";
import "../../App.css";
import "../../Dashboard/Manage/ManagePackage/ManagePackage.css";
import { useDispatch, useSelector } from "react-redux";
import { getDiscounts } from "../../actions/packageActions";
import "./MyInfo.css";

const MyReports = () => {
  const dispatch = useDispatch();
  const { discountList } = useSelector((state) => state.discounts);

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  return (
    <div className="address_info">
      <div className="manage-package">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Promo code</th>
                <th>Discount Percentage</th>
                <th>Limit</th>
              </tr>
            </thead>
            <tbody>
              {discountList &&
                discountList.map(
                  ({ name, promoCode, discountPercentage, limit }) => (
                    <tr>
                      <td>{name}</td>
                      <td>{promoCode}</td>
                      <td>{discountPercentage}</td>
                      <td>{limit}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReports;
