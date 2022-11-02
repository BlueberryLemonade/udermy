import Years from "./Years";
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const optionHandler = (selection) => {
        props.yearSelection(selection.target.value);
};

    return (
        <div className="expenses-filter">
            <div classname="expenses-filter__control">
                <label>Select a year: </label>
                <select  name='year' id='year' value={props.selected} onChange={optionHandler} >
                    <Years />
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;