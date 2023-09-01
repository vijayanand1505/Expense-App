import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

function titleChange (event){
setEnteredTitle(event.target.value);
// console.log(event.target.value);
// console.log('update')
}

function AmountChange(event){
    setEnteredAmount(event.target.value);
}

function DateChange(event){
    setEnteredDate(event.target.value);
}

function submitHandler(event){
    event.preventDefault();
// console.log('clicked')
    const expenseData ={
        // id:Math.floor(Math.random() *10),
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    };

    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

}
    return <form onSubmit={submitHandler}>
<div className="new-expense__controls">
    <div className="new-expense__control">
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleChange}></input>
    </div>
    <div className="new-expense__control">
        <label>Amount</label>
        <input type='number' min='1' step="1" value={enteredAmount} onChange={AmountChange}></input>
    </div>
    <div className="new-expense__control">
        <label>Date</label>
        <input type='date' min="2020-01-01" max="2022-12-31" value={enteredDate} onChange={DateChange}></input>
    </div>
</div>
<div className='new-expense__actions'>
    <button type='button' onClick={props.onCancel}>Cancel</button>
    <button type="submit">Add Expense</button>
</div>
    </form>
}

export default ExpenseForm;