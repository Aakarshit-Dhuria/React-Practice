import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
	const dataPointValues = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	const maxValue = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxValue}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
}
