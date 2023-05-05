import './NewExpenseForm.css';
import { useState } from 'react';
const NewExpense = (props) => {
	// const [title, setTitle] = useState('');
	// const [amount, setAmount] = useState('');
	// const [date, setDate] = useState('');

	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});

	function tilteChangeHandler(event) {
		// setTitle(event.target.value);
		// setUserInput({
		// 	...userInput,
		// 	title: event.target.value,
		// });

		// The best way
		setUserInput((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			};
		});
		console.log(event.target.value);
	}

	function amountChangeHandler(event) {
		// setAmount(event.target.value);
		setUserInput({
			...userInput,
			amount: event.target.value,
		});
		console.log(event.target.value);
	}

	function dateChangeHandler(event) {
		// setDate(event.target.value);
		setUserInput({
			...userInput,
			date: event.target.value,
		});
		console.log(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		const enteredData = {
			...userInput,
			date: new Date(userInput.date),
		};
		console.log('In Expense Form');
		console.log(enteredData);
		props.onSaveExpenseData(enteredData);
		setUserInput({
			title: '',
			amount: '',
			date: '',
		});
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<input
						name="title"
						type="inputfield"
						placeholder="Enter the title for the expense"
						value={userInput.title}
						onChange={tilteChangeHandler}
					></input>
				</div>
				<div className="new-expense__control">
					<input
						name="amount"
						type="number"
						placeholder="Enter the expense amount"
						step="0.01"
						value={userInput.amount}
						onChange={amountChangeHandler}
					></input>
				</div>
				<div className="new-expense__control">
					<label>Please select a date: </label>
					<input
						name="date"
						type="date"
						onChange={dateChangeHandler}
						value={userInput.date}
					></input>
				</div>

				<div className="new-expense__actions">
					<button type="submit">Add new expense</button>
				</div>
			</div>
		</form>
	);
};

export default NewExpense;
