import NASA_API_KEY from '../nasaAPIkey';
import axios from 'axios';


const resNasa = await axios
	.get(
		`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=` + NASA_API_KEY,
		{}
    );

export default resNasa;
