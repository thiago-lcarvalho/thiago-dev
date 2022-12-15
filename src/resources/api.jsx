import axios from 'axios';
import API_KEY from '../apiKeys';
const resSpotify = await axios.get(
	'https://api.spotify.com/v1/me/player/recently-played',
	{
		params: {
			limit: '1',
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: API_KEY,
		},
	}
)
.catch(function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
});

export default resSpotify;
