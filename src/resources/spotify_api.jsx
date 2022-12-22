import axios from 'axios';
import qs from 'qs';
import { API_KEY, BASE64, REFRESH_TOKEN } from './spotifyAPIkey';

const headers = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		Authorization: 'Basic ' + BASE64,
	},
	form: {
		grant_type: 'refresh_token',
		refresh_token: REFRESH_TOKEN,
	},
};
const data = {
	grant_type: 'refresh_token',
	refresh_token: REFRESH_TOKEN,
  };

const res = axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), headers);
console.log(res)

// const refreshToken = await axios
// 	.post('https://accounts.spotify.com/api/token', {
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 			Authorization: 'Basic ' + BASE64,
// 		},
// 		params: {
// 			grant_type: 'refresh_token',
// 			refresh_token: REFRESH_TOKEN,
// 		},
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		console.log(refreshToken);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const resSpotify = await axios
	.get('https://api.spotify.com/v1/me/player/recently-played', {
		params: {
			limit: '1',
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: API_KEY,
		},
	})
	.catch((err) => {
		console.log(err.message);
	});

export { resSpotify };
