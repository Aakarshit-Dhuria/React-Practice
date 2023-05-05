import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
	function saveExpenseHandler(enteredData) {
		const expenseData = { ...enteredData, id: Math.random().toString() };
		console.log('In Add New Expense component');
		console.log(expenseData);
		props.onAddExpense(expenseData);
	}

	return (
		<div className="new-expense">
			<NewExpenseForm onSaveExpenseData={saveExpenseHandler} />
		</div>
	);
};

export default NewExpense;
