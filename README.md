di<div align="center">
<img src=https://raw.githubusercontent.com/thiago-lcarvalho/thiago-dev/main/assets/important-photo-2.png width="100" height="100"/>
</div>
<h1 align="center">
  thiagoafonso.com
</h1>
<p align="center">
  The first version of <a href="https://thiagoafonso.com/" target="_blank">thiagoafonso.com</a> built with <a href="https://reactjs.org" target="_blank">React</a> and hosted with <a href="https://firebase.google.com" target="_blank">Firebase</a>
</p>

<div align="center">
<img src="https://img.shields.io/website?down_color=critical&down_message=offline&up_color=light%20green&up_message=online&url=https%3A%2F%2Fthiagoafonso.com%2F&logo=firebase">
<img src="https://img.shields.io/github/last-commit/thiago-lcarvalho/thiago-dev?color=informational&logo=github">
</div>

# Hello!

![demo](https://raw.githubusercontent.com/thiago-lcarvalho/thiago-dev/main/assets/demo.png)


> Spotify API applied

```javascript
import { CLIENT_ID, REFRESH_TOKEN } from './API_KEYS';

const headers = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		Authorization: 'Basic ' + CLIENT_ID,
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

const resSpotify = await axios.get(
	'https://api.spotify.com/v1/me/player/recently-played',
	{
		params: {
			limit: '1',
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: NEW_ACCESS_TOKEN,
		},
	}
);
```


---
