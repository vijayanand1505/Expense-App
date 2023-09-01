// import React from "react";
import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



const App =() => {
// function App() {
  const Dummy_Expenses = [
    // {
    //   id:1,
    //   title: "Bank Loan",
    //   amount: 2000,
    //   date: new Date(2021, 7, 12),
    // },
    { 
      id:2,
      title: "groceries",
      amount: 1000,
      date: new Date(2020, 4, 3),
    },
    {
      id:3,
      title: "Car Insurance",
      amount: 5000,
      date: new Date(2022, 7, 9),
    },
    {
      id:4,
      title: "Home Rent",
      amount: 5000,
      date: new Date(2022, 7, 9),
    },
  ];
  const[expenses, setExpenses] = useState(Dummy_Expenses);



const addExpenseHandler = (expense) =>{
  // console.log('in app.js')
  // console.log( Dummy_Expenses.push(expense));
  // console.log( Dummy_Expenses);
  // console.log(expense);
  setExpenses((prevExpenses) =>{
    return [expense, ...prevExpenses];
  })
}

// console.log(expenses[0])
// return  React.createElement(
//   'div',
//   {},
//   React.createElement('h1',{},'Expense App'),
//   React.createElement(Expenses, {expenses:expenses})
// )
  return (
    <div>
      <h1>Expense App</h1>
      <NewExpense onAddExpense ={addExpenseHandler}></NewExpense>    
      <Expenses expenses={expenses}></Expenses>
      {/* <Routes>
        <Route path="/" element={<NewExpense onAddExpense ={addExpenseHandler}></NewExpense>}>
      </Route>
      <Route path="/expenses" element={ <Expenses expenses={expenses}></Expenses>}></Route>
     
      
      </Routes> */}
    </div>
    
  );
}

export default App;
