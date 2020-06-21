import axios from 'axios';
let url = 'https://covid19.mathdro.id/api/';
export const fetchApi = async (value) => {
	let changeableUrl = url;
	if (value !== 'g') {
		changeableUrl = `${url}countries/${value}`;
	} else if (value === 'g') {
		changeableUrl = `${url}`;
	}

	try {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

		return { confirmed, recovered, deaths, lastUpdate };
	} catch (error) {
		return error;
	}
};

export const fetchApiChart = async () => {
	try {
		const { data } = await axios.get(url + 'daily');
		return data.map(({ confirmed, deaths, reportDate: date }) => ({
			confirmed: confirmed.total,
			deaths: deaths.total,
			date: date
		}));
	} catch (error) {
		return error;
	}
};
export const fetchApiCountry = async () => {
	try {
		const { data } = await axios.get(url + 'countries');
		return data;
	} catch (error) {
		console.log(error);
	}
};
