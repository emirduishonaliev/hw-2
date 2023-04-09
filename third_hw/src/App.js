import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "A4 Paper",
      price: 300,
      date: new Date(),
    },
  ]);

  const addNewExpenseHandler = (data) => {
    const updatedExpense = [...expenses];
    updatedExpense.push(data);
    setExpenses(updatedExpense);
  };

  return (
    <div className="App">
      <NewExpense addNewExpenseHandler={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
