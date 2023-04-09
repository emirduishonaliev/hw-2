import React, { useState } from "react";
import { Button } from "../UI/button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ addNewExpenseHandler }) => {
  const [showForm, setShowForm] = useState(false);

  const showExpenseForm = (event) => {
    setShowForm((prev) => !prev);
    event.preventDefault();
  };

  return (
    <div className="new-expense-item">
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          addNewExpenseHandler={addNewExpenseHandler}
        />
      ) : (
        <Button
          className="add-btn"
          onClick={showExpenseForm}
          title="Добавить новый расход"
        />
      )}
    </div>
  );
};
