import React from "react";
import "../../../App.css";

const CustomerRow: React.FC<any> = ({ customer }) => {
  const { _id, name, email } = customer;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>bookings</td>
      <td>address</td>
      <td>reports</td>
      {/* <td>
        <button className='delete-btn'>Delete</button>
      </td> */}
    </tr>
  );
};

export default CustomerRow;
