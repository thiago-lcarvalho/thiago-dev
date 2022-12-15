import axios from "axios";

const api = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQDD4t3zkAklzA_mleHzNBLmT_h7C9HoFyiPsLlurXGGD1WCtBlAvxbcQ4xKFgU1IYkizOsaArsa5pF_pgVXZnpQ0S9L-lLrkUGHaKi70yN9srLwW7NJA4kmy6LZ-17hQdoTvqQMyXOimq1um5rsDksgYAnplKEkeFcjus6eGVxJeS2NpYGj3w'
    }
});

export default api
