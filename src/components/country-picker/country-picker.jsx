import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import classes from './country-picker.module.css';
import { fetchApiCountry } from '../../api/api-fetch';
const Country = (props) => {
	const [ countries, setCountries ] = useState();
	useEffect(() => {
		const fetch = async () => {
			const data = await fetchApiCountry();
			setCountries(data.countries);
		};
		fetch();
	}, []);
	const onChangeHandler = (event) => {
		props.onChangeCountry(event.target.value);
	};
	if (!countries) {
		return <div className="loader" />;
	}
	return (
		<div className={classes.container}>
			<FormControl className={classes.formControl} color="primary">
				<NativeSelect onChange={(event) => onChangeHandler(event)} defaultValue=" ">
					<option className={classes.option} value="g">
						Global
					</option>
					{countries.map((clt, i) => (
						<option key={i} className={classes.option} value={clt.name}>
							{clt.name}
						</option>
					))}
				</NativeSelect>
			</FormControl>
		</div>
	);
};

export default Country;
