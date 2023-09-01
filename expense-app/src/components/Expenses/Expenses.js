import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2022");

  const filter = (filtered) => {
    // console.log('in exp')
    // console.log(filtered);
    setfilteredYear(filtered);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <h2>No Expense Found!</h2>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onfilt={filter}></ExpenseFilter>
        {/* {filteredExpenses.length === 0 ? (<h2>No Expense Found!</h2>) :  (filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
        )))} */}

        {/* {filteredExpenses.length === 0 && <h2>No Expense Found!</h2> }
         {filteredExpenses.length > 0 &&
           filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
        ))} */}

        {/* {expensesContent} */}

         <ExpensesList items = {filteredExpenses}></ExpensesList>
        {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.expenses[1].title}
      amount={props.expenses[1].amount}
      date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        ></ExpenseItem> 
         <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
        ></ExpenseItem>  */}
      </Card>
    </div>
  );
}

export default Expenses;
