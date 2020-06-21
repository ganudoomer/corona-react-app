import React from 'react';
import classes from './cards.module.css';
import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import Countup from 'react-countup';
import classnames from 'classnames/bind';
let cx = classnames.bind(classes);

const cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return <div className="loader" />;
	}

	return (
		<div className={classes.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={2} className={cx('card', 'infected')}>
					<CardContent>
						<Typography gutterBottom>Infected</Typography>
						<Typography variant="h4" gutterBottom>
							<Countup start={0} end={confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography variant="body2" gutterBottom>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2" component="p">
							Number of active cases COVID-19.
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={2} className={cx('card', 'recovered')}>
					<CardContent>
						<Typography gutterBottom>Recovered</Typography>
						<Typography variant="h4" gutterBottom>
							<Countup start={0} end={recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography variant="body2" gutterBottom>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2" component="p">
							Number of recoveries from COVID-19.
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={2} className={cx('card', 'deaths')}>
					<CardContent>
						<Typography gutterBottom>Deaths</Typography>
						<Typography variant="h4" gutterBottom>
							<Countup start={0} end={deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography variant="body2" gutterBottom>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2" component="p">
							Number of Deaths from COVID-19.
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default cards;
