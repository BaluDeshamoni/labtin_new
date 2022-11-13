import React from "react";
import "../../../App.css";

const CustomerRow: React.FC<any> = ({ customer }) => {
  const { _id, name, number } = customer;
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
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
