import './Card.css';

function Card() {
	let classes = 'card ' + props.className;
	return <div className={classes}>{props.children}</div>;
}

export default Card;
