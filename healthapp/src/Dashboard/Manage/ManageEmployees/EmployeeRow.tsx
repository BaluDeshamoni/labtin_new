import React from "react";
import "../../../App.css";

const EmployeeRow: React.FC<any> = ({ employee }) => {
  const { name, email } = employee;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>

      <td>address</td>
      {/* <td>
        <button className='delete-btn'>Delete</button>
      </td> */}
    </tr>
  );
};

export default EmployeeRow;
