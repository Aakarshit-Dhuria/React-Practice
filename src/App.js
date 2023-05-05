import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
	const addExpenseHandler = (expense) => {
		console.log('In App.js');
		console.log(expense);
	};

	return (
		<div>
			<h1>Hello from my first React app.</h1>
			<p>This is also visible.</p>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses></Expenses>
		</div>
	);
}

export default App;
