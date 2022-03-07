import "./ExpenseDate.css";

function ExpenseDate(props) {
  // toLocaleTimeString(locales, options)
  // const day = date.toLocaleString("en-US", {
  //   month: "long",
  //   day: "2-digit",
  //   year: "numeric",
  // }); // March 02, 2021

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
