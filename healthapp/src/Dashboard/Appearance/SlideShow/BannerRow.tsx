import React from "react";

const BannerRow: React.FC<any> = ({ banner }) => {
  const { _id, title, secTitle, img, description } = banner;
  return (
    <tr>
      <td>
        <img
          src={`//localhost:5000/${img}`}
          height="50px"
          width="80px"
          alt=""
        />
      </td>
      <td>{title}</td>
      <td>{secTitle}</td>
      <td>{description}</td>
      {/* <td>
        <button className="delete-btn">Delete</button>
      </td> */}
    </tr>
  );
};

export default BannerRow;
