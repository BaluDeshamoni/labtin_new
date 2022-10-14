import React from "react";

const FormHeading: React.FC<any> = ({ children }) => {
  return (
    <h2
      style={{
        textAlign: "center",
        color: "#000C83",
        marginBottom: "10px",
        marginTop: "-10px",
      }}
    >
      {children}
    </h2>
  );
};

export default FormHeading;
