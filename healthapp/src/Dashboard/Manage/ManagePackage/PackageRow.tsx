import React from "react";
import { Package } from "../../../modals/Package";

interface Props {
  singlePackage: Package;
}

const PackageRow: React.FC<Props> = ({ singlePackage }) => {
  const { _id, title, details, parameters, originalPrice, discountPrice } =
    singlePackage;
  return (
    <tr>
      <td>{title}</td>
      <td>{details}</td>
      <td>{parameters}</td>
      <td>{originalPrice}</td>
      <td>{discountPrice}</td>
      {/* <td>
                <button className='delete-btn'>Delete</button>
                <button className='edit-btn'>Edit</button>
            </td> */}
    </tr>
  );
};

export default PackageRow;
