import axios from 'axios';
import qs from 'qs';
import { BASE64, REFRESH_TOKEN } from './API_KEYS';

const headers = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		Authorization: 'Basic ' + BASE64,
	},
};
const data = {
	grant_type: 'refresh_token',
	refresh_token: REFRESH_TOKEN,
};

let res = axios
	.post('https://accounts.spotify.com/api/token', qs.stringify(data), headers)
	.then((res) => res.data.access_token);


const NEW_ACCESS_TOKEN = 'Bearer ' + (await res);

const resSpotify = await axios
	.get('https://api.spotify.com/v1/me/player/recently-played', {
		params: {
			limit: '1',
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: NEW_ACCESS_TOKEN,
		},
	})
	.catch((err) => {
		console.log(err.message);
	});

export { resSpotify };
