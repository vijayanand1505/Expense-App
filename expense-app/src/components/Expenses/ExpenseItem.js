
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
// const expenseDate = new Date(2022,7,7);
// const expenseName = 'Car Insurance';
// const expenseAmount = 2000;
// console.log('evaluate');
// const [amount, setTitle] = useState(props.amount);


// function clickHandler(){
//   setTitle('updated');
//   // console.log(title)
// }

  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date}></ExpenseDate>
      <div className='expense-item__description '>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>Rs.{props.amount}</div>
        {/* <button onClick={clickHandler}>change title</button> */}
        </div>
    </Card>
  );
}

export default ExpenseItem;
