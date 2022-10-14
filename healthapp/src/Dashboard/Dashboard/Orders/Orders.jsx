import React, { useEffect, useState } from "react";
import "../../../App.css";
import "../../Manage/ManagePackage/ManagePackage.css";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  console.log(orders);
  const l = ["Ordered", "Shipped", "On the way", "Delivered"];
  const [active, setActive] = useState(false);
  return (
    <div className="manage-package">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>item</th>
              <th>Lab </th>
              <th>Address</th>
              <th>Total Price</th>
              <th>status </th>
              <th>Upload Reports</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (
                { userName, orderedItem, totalPrice, address, status },
                index
              ) => (
                <tr>
                  <td>{userName}</td>
                  <td>{orderedItem.item}</td>
                  <td>{orderedItem.lab}</td>
                  <td>{address.state}</td>
                  <td>{totalPrice}</td>
                  <td>
                    {status} : {l[status - 1]}
                  </td>
                  <td
                    onClick={() =>
                      navigate("/dashboard/uploadReports", {
                        state: { order: orders[index] },
                      })
                    }
                  >
                    Add
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
