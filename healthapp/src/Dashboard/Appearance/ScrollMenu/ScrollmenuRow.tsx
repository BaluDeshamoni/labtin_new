import React from "react";

const ScrollmenuRow: React.FC<any> = ({ banner }) => {
  const { _id, title, icon } = banner;
  return (
    <tr>
      <td>
        <img
          src={`//localhost:5000/${icon}`}
          height="50px"
          width="80px"
          alt=""
        />
      </td>
      <td>{title}</td>
      {/* <td>
        <button className="delete-btn">Delete</button>
      </td> */}
    </tr>
  );
};

export default ScrollmenuRow;
