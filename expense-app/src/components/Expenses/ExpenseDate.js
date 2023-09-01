import Card from '../UI/Card';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  // const month  = props.date.toISOString();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="top">
      <div>{month}</div>
      <div>{year}</div>
      <div className='day'>{day}</div>




      {/* <div class="jeff">
        {/* <p>dass</p> */}
      
      {/* </div> */}
    </Card>
  );
}

export default ExpenseDate;
