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
    <div className="address_info">
      <div className="manage-package">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>place</th>
                <th>city</th>
                <th>Pin Code</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {address &&
                address.map(({ place, city, pinCode, state }) => (
                  <tr>
                    <td>{place}</td>
                    <td>{city}</td>
                    <td>{pinCode}</td>
                    <td>{state}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
