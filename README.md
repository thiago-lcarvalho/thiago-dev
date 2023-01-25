<div align="center">
<img src=https://raw.githubusercontent.com/thiago-lcarvalho/thiago-dev/main/assets/important-photo-2.png width="100" height="100"/>
</div>
<h1 align="center">
  thiagoafonso.com
</h1>
<p align="center">
  The first version of <a href="https://thiagoafonso.com/" target="_blank">thiagoafonso.com</a> hosted with <a href="https://firebase.google.com" target="_blank">Firebase</a> and built with <a href="https://reactjs.org" target="_blank">React
</p>

<div align="center">
<a href="https://thiagoafonso.com/" target="_blank">
<img src="https://img.shields.io/website?down_color=critical&down_message=offline&up_color=light%20green&up_message=online&url=https%3A%2F%2Fthiagoafonso.com%2F&logo=firebase">
</a>
<a href="https://github.com/thiago-lcarvalho/thiago-dev">
<img src="https://img.shields.io/github/last-commit/thiago-lcarvalho/thiago-dev?color=informational&logo=github">
</a>
</div>

# Introduction
![demo](https://raw.githubusercontent.com/thiago-lcarvalho/thiago-dev/main/assets/demo.png)

Hello! 

The purpose of this project is to introduce myself into development and test some of the things I learned about React + html/css/js + programming in general.

This was my first fully commited attempt to create a website from start to finish.

This process took about 2-3 months with a lot of different conflicting design ideas but i'm happy with what I built!

There's a lot to do still but I'm satisfied enough to start a new project.

I intend to keep updating this project or make new versions with different frameworks and libraries.

# Tools

this website uses a ton of cool open-source projects and other tools:

-   [React] - front-end JavaScript library for building user interfaces based on UI components.
-   [Phosphor icons] - flexible icon family, super easy to work with!
-   [Vite] - hmr + easy build process, made everything easier
-   [Spotify for developers] - easy to use and awesome to build creative tools with
-   `+ a lot more`

    [react]: https://reactjs.org/
    [spotify for developers]: https://developer.spotify.com/discover/
    [phosphor icons]: https://phosphoricons.com
    [vite]: https://vitejs.dev/


# Info

> how I used Spotify`s API

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
...
