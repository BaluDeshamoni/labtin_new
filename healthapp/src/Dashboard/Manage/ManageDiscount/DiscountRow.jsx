import React from "react";
import "../../../App.css";

const DiscountRow = ({ discount }) => {
  const { name, promoCode, discountPercentage, applicableTo } = discount;
  return (
    <tr>
      <td>{name}</td>
      <td>{promoCode}</td>
      <td>{discountPercentage}</td>
      <td>{applicableTo}</td>
      {/* <td>
        <button className='delete-btn'>Delete</button>
      </td> */}
    </tr>
  );
};

export default DiscountRow;
