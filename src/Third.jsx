import { Planet, SpotifyLogo, CloudRain } from 'phosphor-react';
import styles from './third.module.css';
import GitHubCalendar from 'react-github-calendar';
import resSpotify from './resources/spotify_api';
import resNasa from './resources/nasa_api';

export function Third() {
	function randomAsteroid(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const item = arr[randomIndex];

		return item;
	}

	const nasaAsteroidInfo = resNasa.data.near_earth_objects;
	const nasaRandomAsteroid = randomAsteroid(nasaAsteroidInfo);
	const nasaAsteroidName = nasaRandomAsteroid.name_limited;
	const nasaAsteroidID = nasaRandomAsteroid.id;
	const nasaAsteroidIDURL = `https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${nasaAsteroidID}&view=VOPDCA`;
	var nasaAsteroidHazardous =
		nasaRandomAsteroid.is_potentially_hazardous_asteroid;

	if (nasaAsteroidHazardous == true) {
		nasaAsteroidHazardous = 'Yes';
	} else if (nasaAsteroidHazardous == false) {
		nasaAsteroidHazardous = 'No';
	} else {
		nasaAsteroidHazardous = 'Unknown';
	}

	console.log(nasaRandomAsteroid);
	console.log(nasaAsteroidHazardous);

	const spotifyTrack = resSpotify.data.items[0].track.name;
	const spotifyTrackURL =
		resSpotify.data.items[0].track.external_urls.spotify;
	const spotifyTrackIMG = resSpotify.data.items[0].track.album.images[1].url;
	const spotifyTrackArtist = resSpotify.data.items[0].track.artists[0].name;

	const sinceStart = (contributions) => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const shownMonths = 2;

		return contributions.filter((day) => {
			const date = new Date(day.date);
			const monthOfDay = date.getMonth();

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			);
		});
	};

	return (
		<section>
            
			<a name="3"></a>
            
			<div className={styles.contentMainWrapper}>
            <div className={styles.boxDivs}>
				<div className={styles.box1Div}>
					<div className={styles.nasaAPI}>
						<a
							href={nasaAsteroidIDURL}
							target="blank"
						>
							<span>NASA API</span>
							<Planet
								size={40}
								color="#093A8A"
							/>
							<span></span>
						</a>
					</div>
					<SpotifyLogo
						size={40}
						color="#1CD760"
					/>
					<CloudRain
						size={40}
						color="#F0F2EE"
						weight="fill"
					/>
				</div>
				<a
					className={styles.box2link}
					href="https://github.com/thiago-lcarvalho"
					target="blank"
				>
					<div className={styles.box2Div}>
						<div className={styles.gitHubCalendar}>
							<GitHubCalendar
								color={'#4DF088'}
								username="thiago-lcarvalho"
								transformData={sinceStart}
								hideColorLegend
								hideMonthLabels
								blockSize={14}
								labels={{
									totalCount: '{{count}}',
								}}
							/>
							<span className={styles.gitHubCalendarText}>
								github contributions <br />
								in the last 2 months
							</span>
						</div>
					</div>
				</a>
				<div className={styles.box3Div}>
					<a
						href={spotifyTrackURL}
						target="blank"
					>
						<img
							src={spotifyTrackIMG}
							alt=""
						/>
						<span>
							{spotifyTrack} <br /> by <br /> {spotifyTrackArtist}
						</span>
					</a>
				</div>
			</div>
            </div>
		</section>
	);
}
