import Years from "./Years";

const ExpenseFilter = (props) => {

    const optionHandler = (selection) =>
    props.yearSelection(selection.target.value);
      
   return (
   <form>
        <select name='year' id='year' onChange={optionHandler} >
         <Years />
        </select>
    </form>
    )
};

export default ExpenseFilter;