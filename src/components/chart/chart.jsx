import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import classes from './chart.module.css';
import { fetchApiChart } from '../../api/api-fetch';

const Chart = ({ data, daily }) => {
	const [ dailyData, setDailyData ] = useState();
	useEffect(() => {
		const fetchMyAPI = async () => {
			const initialDailyData = await fetchApiChart();
			setDailyData(initialDailyData);
		};

		fetchMyAPI();
	}, []);

	if (!dailyData) {
		return <div className="loader" />;
	}

	const line = (
		<Line
			data={{
				labels: dailyData.map(({ date }) => date),
				datasets: [
					{
						data: dailyData.map((data) => data.confirmed),
						label: 'Infected',
						borderColor: 'rgba(255,255,255,.3)',
						backgroundColor: 'rgba(0,0,255,.1)'
					},
					{
						data: dailyData.map((data) => data.deaths),
						label: 'Deaths',
						borderColor: 'rgba(255,0,0,.4)',
						backgroundColor: 'rgba(255,0,0,.51)'
					}
				]
			}}
		/>
	);
	const bar = (
		<Bar
			data={{
				labels: [ 'Active Cases', 'Recovered', 'Deaths' ],
				datasets: [
					{
						label: 'People',
						lineTension: 0.5,
						backgroundColor: [ 'rgba(0, 0, 150, 0.2)', 'rgba(0, 100, 0, 0.5)', 'rgba(150, 0, 0, 0.3)' ],
						borderColor: 'rgba(0,0,0,0.4)',
						borderWidth: 2,
						data: [ data.confirmed.value, data.recovered.value, data.deaths.value ]
					}
				]
			}}
		/>
	);
	return <div className={classes.container}>{daily ? bar : line}</div>;
};

export default Chart;
