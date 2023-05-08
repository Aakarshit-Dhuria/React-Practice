import ExpenseItems from './ExpenseItems';
import Card from '../Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear() === Number(filteredYear)
	);

	// The other way of working with conditional content is to store the content based on the condition inside a variable, for eg here we have stored the default content in a variable and if the condition is true we change the content to the desired content.
	// let expenseContent = <p>No expenses found.</p>;

	// if (filteredExpenses.length > 0) {
	// 	expenseContent = filteredExpenses.map((expense) => (
	// 		<ExpenseItems
	// 			key={expense.id}
	// 			title={expense.title}
	// 			amount={expense.amount}
	// 			date={expense.date}
	// 		/>
	// 	));
	// }

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{/* We add key prop to help react uniquely identify each item, so that whenever it makes an update it doesnt have to update each item in the list, and only update the required item. */}
				{/* {props.expenses
					.filter(
						(expense) =>
							expense.date.getFullYear() === Number(filteredYear)
					)
					.map((expense) => (
						<ExpenseItems
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))} */}

				{/* We can also pre-filter the items and store the results in a
				new array and display them. */}
				{/* {filteredExpenses.map((expense) => (
					<ExpenseItems
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))} */}

				{/* Outputting content based on a condition */}
				{/* We can use ternary operator for this */}
				{/* {filteredExpenses.length === 0 ? (
					<p>No Expenses found</p>
				) : (
					filteredExpenses.map((expense) => (
						<ExpenseItems
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)} */}

				{/* Another clean way of outputting conditional content is to move the conditional content outside the jsx code and store it in a variable and display it */}
				{/* {expenseContent} */}

				<ExpenseList items={filteredExpenses} />

				{/* <ExpenseItems
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItems
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItems
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
			<ExpenseItems
				title={expenses[3].title}
				amount={expenses[3].amount}
				date={expenses[3].date}
			/> */}
			</Card>
		</div>
	);
}

export default Expenses;
