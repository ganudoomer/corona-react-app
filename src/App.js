import React from 'react';
import { Card, Chart, Country } from './components';
import classes from './App.module.css';
import { fetchApi } from './api/api-fetch';
import image from './images/image.png';
class App extends React.Component {
	state = {
		data: {},
		country: false
	};
	async componentDidMount() {
		const data = await fetchApi('g');
		this.setState({ data });
	}
	changeCountry = async (value) => {
		if (value === 'g') {
			this.setState({ country: false });
		} else {
			this.setState({ country: true });
		}
		const data = await fetchApi(value);
		this.setState({ data });
	};

	render() {
		return (
			<div className={classes.container}>
				<img alt="corona app" className={classes.image} src={image} />
				<Card data={this.state.data} />
				<Country onChangeCountry={(e) => this.changeCountry(e)} />
				<Chart data={this.state.data} daily={this.state.country} />
			</div>
		);
	}
}

export default App;
