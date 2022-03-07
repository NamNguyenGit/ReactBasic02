import React from "react";
import Card from "../UI/Card";
import ExpensesChart from "./Chart/ExpensesChart";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpensesList from "./List/ExpensesList";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = React.useState("2020");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // const selectedYearExpenses = props.item.filter(
  //   (item) => item.date.getFullYear() === +selectedYear
  // );

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        handleYearChange={handleYearChange}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
