import React, { useState } from "react";
import { Input } from "../UI/input/Input";
import { Button } from "../UI/button/Button";
import "./ExpenseForm.css";

export const ExpenseForm = ({ onShowForm, addNewExpenseHandler }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(null);

  const titleInputChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const expenseData = {
    title,
    price,
    date,
  };

  const saveHandler = (event) => {
    event.preventDefault();
    addNewExpenseHandler(expenseData);
    setTitle("");
    setPrice(0);
    setDate(null);
  };

  return (
    <form>
      <div className="parent-input-btn">
        <div>
          <div className="two-input">
            <Input
              labelName="Название"
              inputType="text"
              id="Название"
              placeholder="Введите название"
              onChange={titleInputChangeHandler}
              value={title}
            />
            <Input
              labelName="Количество"
              inputType="number"
              id="Количество"
              placeholder="Введите количество"
              onChange={priceInputChangeHandler}
              value={price}
            />
          </div>
          <div>
            <Input
              labelName="Дата"
              inputType="date"
              id="Дата"
              placeholder="дд.мм.гггг"
              onChange={dateInputChangeHandler}
              value={date}
            />
          </div>
        </div>

        <div>
          <Button className="cancel-btn" onClick={onShowForm} title="Отмена" />
          <Button
            className="save-btn"
            onClick={saveHandler}
            title="Добавить расходы"
          />
        </div>
      </div>
    </form>
  );
};
