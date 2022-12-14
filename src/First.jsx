import styles from './first.module.css';
import Avatar from '@mui/material/Avatar';

export function First() {
	return (
		<section>
			<section className={styles.introMainWrapper}>
				<div className={styles.subMainDiv}>
					<Avatar
						className={styles.introPhoto}
						sx={{ width: 150, height: 150 }}
						alt="Thiago Afonso"
						src="././self-photo.jpeg"
					/>
					<div className={styles.contentIntro}>
						<span className={styles.IntroHello}>
							Hello, my name is{' '}
						</span>
						<span className={styles.IntroName}>Thiago Afonso</span>
					</div>
					<h1 className={styles.frontTitle}>Frontend Developer</h1>
				</div>
			</section>
		</section>
	);
}
