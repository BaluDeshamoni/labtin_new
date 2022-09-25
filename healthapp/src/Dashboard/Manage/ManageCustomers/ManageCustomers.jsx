import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../actions/customerActions";
import { usersList } from "../../../actions/userActions";
import CustomerRow from "./CustomerRow";

const ManageCustomers = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userList);
  const customers = users.filter((u) => !(u.isEmployee || u.isAdmin));
  console.log(customers);

  useEffect(() => {
    dispatch(usersList());
  }, [dispatch]);

  return (
    <div className="manage-package">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Bookings</th>
              <th>Address</th>
              <th>Reports</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers.map((customer) => <CustomerRow customer={customer} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCustomers;
