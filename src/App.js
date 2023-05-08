import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		// console.log('In App.js');
		// console.log(expense);

		// setExpenses([...expenses, expense]);

		// This is a better method to make updates on the previous state.
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});

		// console.log(expenses);
	};

	return (
		<div>
			{/* <h1>Hello from my first React app.</h1>
			<p>This is also visible.</p> */}
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses}></Expenses>
		</div>
	);
}

export default App;
