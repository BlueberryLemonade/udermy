import Years from "./Years";

const ExpenseFilter = () => {

    

    const selectionHandler = (selection) => {
        console.log(selection.target);
    }

   
   return (
   <form>
        <select name='year' id='year' onChange={selectionHandler}>
         <Years />
        </select>
    </form>
    )
};

export default ExpenseFilter;