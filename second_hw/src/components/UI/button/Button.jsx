import React from "react";
import "./Button.css";

export const Button = ({ color, title, margin }) => {
  return (
    <button className="btn" style={{ background: color, marginLeft: margin }}>
      {title}
    </button>
  );
};
