import React from "react";
import "./ExpenseItem.css";

export const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className="contain">
      <p>{date.toString()}</p>
      <p>{title}</p>
      <p className="price">{`${price} som`}</p>
    </div>
  );
};
