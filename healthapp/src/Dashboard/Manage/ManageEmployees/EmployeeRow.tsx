import React from "react";
import "../../../App.css";

const EmployeeRow: React.FC<any> = ({ employee }) => {
  const { name, number } = employee;
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      <td>address</td>
      {/* <td>
        <button className='delete-btn'>Delete</button>
      </td> */}
    </tr>
  );
};

export default EmployeeRow;
