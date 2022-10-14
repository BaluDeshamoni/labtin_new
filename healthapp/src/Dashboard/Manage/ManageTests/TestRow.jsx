import React from "react";
import { Package } from "../../../modals/Package";

const TestRow = ({ data }) => {
  const { _id, title, details } = data;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
    </tr>
  );
};

export default TestRow;
