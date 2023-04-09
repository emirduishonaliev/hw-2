import React from "react";
import "./Input.css";

export const Input = ({ inputType, labelName, id, placeholder, ...rest }) => {
  return (
    <div className="input_containter">
      <label htmlFor={id}>{labelName}</label>
      <input
        className="input"
        type={inputType}
        id={id}
        placeholder={placeholder || ""}
        {...rest}
      />
    </div>
  );
};
