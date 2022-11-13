import React from "react";
import { useNavigate } from "react-router-dom";

const ScrollmenuRow = ({ banner }) => {
  const { _id, title, icon } = banner;
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <img
          src={`http://localhost:3000/${icon}`}
          height="50px"
          width="80px"
          alt=""
        />
      </td>
      <td
        onClick={() =>
          navigate("/dashboard/LabsPack", {
            state: banner,
          })
        }
      >
        {title}
      </td>
      {/* <td>
        <button className="delete-btn">Delete</button>
      </td> */}
    </tr>
  );
};

export default ScrollmenuRow;
