import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) =>
{
const expenseData={
    ...enteredExpenseData,
    id:Math.floor(Math.random()*10).toString()
}
// console.log('in newexpense.')
// console.log(expenseData);
props.onAddExpense(expenseData);
setIsEditing(false);
}

function startEdit(){
    setIsEditing(true);
}

function stopEdit(){
    setIsEditing(false);
}
    return <div className="new-expense">
        {/* {!isEditing && <button onClick={startEdit}>Add New Expense</button>}
        {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdit}></ExpenseForm>} */}
        {!isEditing ?  ( <button onClick={startEdit}>Add New Expense</button>) : (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEdit}></ExpenseForm>)}
    </div>
}

export default NewExpense;