import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js';
import Card from './Card';

function ExpenseItems(props) {
	// const expenseDate = new Date(2021, 2, 28);
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 202.12;

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>

		//// Hardcoded way
		// <div className="expense-item">
		// 	<div>
		// 		{expenseDate.toDateString().split(' ').splice(1).join(' ')}
		// 	</div>
		// 	<div className="expense-item__description">
		// 		<h2>{expenseTitle}</h2>
		// 		<div className="expense-item__price">${expenseAmount}</div>
		// 	</div>
		// </div>
	);
}

export default ExpenseItems;
