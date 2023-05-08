import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../Card';
import { useState } from 'react';

function ExpenseItems(props) {
	// const expenseDate = new Date(2021, 2, 28);
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 202.12;
	// let title = props.title;

	const [title, setTitle] = useState(props.title);

	function clickHandler() {
		setTitle('Updated Title');
		console.log('Clicked!!!!!');
	}

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
				<button onClick={clickHandler}>Change Title</button>
			</Card>
		</li>
	);
}

export default ExpenseItems;
