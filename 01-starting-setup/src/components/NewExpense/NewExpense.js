import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHander = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onDataReceieved(expenseData);
    };

    return(
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHander}/>
    </div>
    )
};

export default NewExpense;