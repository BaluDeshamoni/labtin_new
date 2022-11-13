import React from "react";

const BannerRow: React.FC<any> = ({ banner }) => {
  const { _id, title, link, img, description } = banner;
  return (
    <tr>
      <td>
        <img
          src={`http://localhost:3000/${img}`}
          height="50px"
          width="80px"
          alt=""
        />
      </td>
      <td>{title}</td>
      <td>{link}</td>
      <td>{description}</td>
      {/* <td>
        <button className="delete-btn">Delete</button>
      </td> */}
    </tr>
  );
};

export default BannerRow;
