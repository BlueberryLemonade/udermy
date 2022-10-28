import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
function Expenses(props) {

  const selectionHandler = (selectedYear) =>{
    console.log("The selected year is: " + selectedYear);
  }

  const expenses = props.expenses;

  return (
  <Card className="expenses">
      <ExpenseFilter yearSelection={selectionHandler}/>
    {expenses.map((expense) => (
      <ExpenseItem 
       key={expense.id} 
       title={expense.title}
       amount={expense.amount} 
       date={expense.date}
       />
    ))}
  </Card>
  )
}

export default Expenses;