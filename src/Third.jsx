import { Planet, SpotifyLogo, CloudRain } from 'phosphor-react';
import styles from './third.module.css';
import GitHubCalendar from 'react-github-calendar';
import resSpotify from './resources/spotify_api';
import NASA_API_KEY from './nasaAPIkey';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

export function Third() {
	const [loaderScreen, setloaderScreen] = useState([]);
		setTimeout(setloaderScreen, 3000);

	const [resNasa, setResNasa] = useState([]);
	const [loadingAPI, setLoading] = useState(true);
	const NASA_API_URL =
		`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=` + NASA_API_KEY;
	useEffect(() => {
		axios.get(NASA_API_URL).then((res) => {
			setResNasa(res);
			setLoading(false);
		});
	}, []);
	function randomAsteroid(arr) {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const item = arr[randomIndex];

		return item;
	}

	const nasaAsteroidInfo = loadingAPI ? '' : resNasa.data.near_earth_objects;
	const nasaRandomAsteroid = loadingAPI ? '' : randomAsteroid(nasaAsteroidInfo);
	const nasaAsteroidName = loadingAPI ? '' : nasaRandomAsteroid.name_limited;
	const nasaAsteroidID = loadingAPI ? '' : nasaRandomAsteroid.id;
	const nasaAsteroidIDURL = loadingAPI
		? ''
		: `https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${nasaAsteroidID}&view=VOPDCA`;
	var nasaAsteroidHazardous = loadingAPI
		? ''
		: nasaRandomAsteroid.is_potentially_hazardous_asteroid;

	if (nasaAsteroidHazardous == true) {
		nasaAsteroidHazardous = 'Yes';
	} else if (nasaAsteroidHazardous == false) {
		nasaAsteroidHazardous = 'No';
	} else {
		nasaAsteroidHazardous = 'Unknown';
	}

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
		<>
			<div id={loaderScreen ? styles.overlay : styles.blank}>
				<Box sx={{ display: 'flex' }}>
					<svg
						className={styles.svgAnimate}
						xmlns="http://www.w3.org/2000/svg"
						fill="#121214"
						viewBox="0 0 256 256"
					>
						<rect
							width="256"
							height="256"
							fill="none"
						></rect>
						<path d="M196.1,128a195.3,195.3,0,0,0,19.2-32.7c11.1-24.6,11.2-44.2.4-55C198.2,22.9,162.5,35.4,128,60,93.5,35.4,57.8,22.9,40.3,40.3c-10.8,10.8-10.7,30.4.4,55A195.3,195.3,0,0,0,59.9,128a195.3,195.3,0,0,0-19.2,32.7c-11.1,24.6-11.2,44.2-.4,55,5.6,5.6,13.1,8.1,21.9,8.1,18.4,0,42.4-11.1,65.8-27.8,23.4,16.7,47.4,27.8,65.8,27.8,8.8,0,16.3-2.5,21.9-8.1,10.8-10.8,10.7-30.4-.4-55A195.3,195.3,0,0,0,196.1,128Zm-2.3-79.7c4.8,0,8.4,1.1,10.6,3.3,5.6,5.7,4.2,19.5-3.7,37.1a169.7,169.7,0,0,1-14.8,25.9c-6.4-7.9-13.5-15.7-21.1-23.4s-15.4-14.5-23.5-21.1C163.2,55.2,182,48.3,193.8,48.3ZM176.1,128a277.3,277.3,0,0,1-22.6,25.5A314.1,314.1,0,0,1,128,176.2a314.1,314.1,0,0,1-25.5-22.7A277.3,277.3,0,0,1,79.9,128a277.3,277.3,0,0,1,22.6-25.5A314.1,314.1,0,0,1,128,79.8a314.1,314.1,0,0,1,25.5,22.7A277.3,277.3,0,0,1,176.1,128ZM55.3,88.7C47.4,71.1,46,57.3,51.6,51.6c2.2-2.2,5.8-3.3,10.6-3.3,11.8,0,30.6,6.9,52.5,21.8-8.1,6.6-16,13.7-23.5,21.1s-14.7,15.5-21.1,23.4A169.7,169.7,0,0,1,55.3,88.7ZM51.6,204.4c-5.6-5.7-4.2-19.5,3.7-37.1a169.7,169.7,0,0,1,14.8-25.9c6.4,7.9,13.5,15.7,21.1,23.4s15.4,14.5,23.5,21.1C83.9,206.8,59.2,212,51.6,204.4Zm152.8,0c-2.2,2.2-5.8,3.3-10.6,3.3-11.8,0-30.6-6.9-52.5-21.8,8.1-6.6,16-13.7,23.5-21.1s14.7-15.5,21.1-23.4a169.7,169.7,0,0,1,14.8,25.9C208.6,184.9,210,198.7,204.4,204.4ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path>
					</svg>
				</Box>
			</div>
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

							<span>my last played song!</span>
							<a
								href={spotifyTrackURL}
								target="blank"
							>
								<div className={styles.divSpotify}>
									<SpotifyLogo
										size={50}
										color="#1CD760"
									/>
									<img
										src={spotifyTrackIMG}
										alt={spotifyTrack}
									/>
									<div className={styles.divSpotifyText}>
										<p className={styles.divSpotifyTitle}>
											{spotifyTrack}
										</p>
										<p>{spotifyTrackArtist}</p>
									</div>
								</div>
							</a>
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
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
