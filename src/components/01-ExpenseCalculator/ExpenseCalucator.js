import { useState } from "react";
import NewExpense from "./NewExpense/NewExpense";
import Expenses from "./Expenses/Expenses";
import { DUMMY_EXPENSES } from "./mocks";

function ExpenseCalucator() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default ExpenseCalucator;
