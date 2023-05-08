import ExpenseItems from './ExpenseItems';
import Card from '../Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear() === Number(filteredYear)
	);

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
				{filteredExpenses.map((expense) => (
					<ExpenseItems
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
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
