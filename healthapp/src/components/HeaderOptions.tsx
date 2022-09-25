import React from "react";
import "./HeaderOptions.css";

const HeaderOptions = ({ Icon, Title, onClick }: any) => {
  return (
    <div className="header__options" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}
      <p className="headerOption_title">{Title}</p>
    </div>
  );
};

export default HeaderOptions;
