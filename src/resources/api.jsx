import axios from "axios";
import API_KEY from "../apiKeys";
const resSpotify = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
    params: {
        'limit': '1'
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': API_KEY
    }
});

export default resSpotify;