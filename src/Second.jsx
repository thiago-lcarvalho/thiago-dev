import styles from './second.module.css';
import moment from 'moment';
import {
	StackOverflowLogo,
	FileJsx,
	Code,
	BracketsCurly,
	GitBranch,
	GitPullRequest,
	TerminalWindow,
	Command,
} from 'phosphor-react';
import Stack from '@mui/material/Stack';

export function Second() {
	var timeStartedDev = moment('2022-07-06T18:00:00Z');
	var timeNow = moment();
	const hoursSinceStartedDev = timeNow.diff(timeStartedDev, 'hours');

	return (
		<section>
			<a name="2"></a>
			<section className={styles.contentMainWrapper}>
				<div className={styles.iconsBackground}>
					<StackOverflowLogo
						className={styles.iconsBackground1}
						size={45}
					/>
					<FileJsx
						className={styles.iconsBackground2}
						size={45}
					/>
					<TerminalWindow
						className={styles.iconsBackground3}
						size={45}
					/>
					<Command
						className={styles.iconsBackground4}
						size={45}
					/>
					<Code
						className={styles.iconsBackground5}
						size={45}
					/>
					<BracketsCurly
						className={styles.iconsBackground6}
						size={45}
					/>
					<GitBranch
						className={styles.iconsBackground7}
						size={45}
					/>
					<GitPullRequest
						className={styles.iconsBackground8}
						size={45}
					/>
				</div>
				<div className={styles.paperDiv}>
					<div className={styles.contentMainDiv}>
						<div className={styles.hoursSinceDiv}>
							<span className={styles.hoursSince}>
								{hoursSinceStartedDev}
							</span>
							<span className={styles.hoursSinceText}>
								hours
								<br />
								since the start
								<br />
								of my journey
							</span>
						</div>
						<span className={styles.hoursSinceHiddenText}>
							on 06/07/2022 I made the decision to become a
							developer
						</span>
					</div>
					<Stack
						direction="row"
						spacing={2}
						className={styles.stackDiv}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="4em"
							height="4em"
						>
							<path
								fill="#E65100"
								d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
							/>
							<path
								fill="#FF6D00"
								d="M24 8L24 39.9 35.2 36.7 37.7 8z"
							/>
							<path
								fill="#FFF"
								d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
							/>
							<path
								fill="#EEE"
								d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="4em"
							height="4em"
						>
							<path
								fill="#0277BD"
								d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
							/>
							<path
								fill="#039BE5"
								d="M24 8L24 39.9 35.2 36.7 37.7 8z"
							/>
							<path
								fill="#FFF"
								d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
							/>
							<path
								fill="#EEE"
								d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="4em"
							height="4em"
						>
							<path
								fill="#ffd600"
								d="M6,42V6h36v36H6z"
							/>
							<path
								fill="#000001"
								d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="4em"
							height="4em"
							viewBox="0 0 48 48"
						>
							<path
								fill="#80deea"
								d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
							></path>
							<path
								fill="#80deea"
								d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
							></path>
							<path
								fill="#80deea"
								d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
							></path>
							<circle
								cx="24"
								cy="24"
								r="4"
								fill="#80deea"
							></circle>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="4em"
							height="4em"
							viewBox="0 0 48 48"
						>
							<path
								fill="#F4511E"
								d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
							></path>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="4em"
							height="4em"
							viewBox="0 0 64 64"
						>
							<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
						</svg>
					</Stack>
				</div>
				<div className={styles.secondBox}></div>
			</section>
		</section>
	);
}
