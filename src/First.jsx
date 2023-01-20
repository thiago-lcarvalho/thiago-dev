import styles from './first.module.css';
import Avatar from '@mui/material/Avatar';
import Typewriter from 'typewriter-effect';
import { useState, useEffect } from 'react';

export function First() {
	const [isInPT, setIsInPT] = useState(false);

useEffect(() => {
   const defaultLanguage = navigator.language || navigator.languages[0];
   if (defaultLanguage.substring(0, 2) === 'pt') {
      setIsInPT(true);
   }
}, []);

	return (
		<section>
			<a name="1"></a>
			<section className={styles.introMainWrapper}>
				<div className={styles.subMainDiv}>
					<Avatar
						className={styles.introPhoto}
						sx={{ width: 150, height: 150 }}
						alt="Thiago Afonso"
						src="/assets/self-photo.jpeg"
					/>
					<div className={styles.contentIntro}>
						<span className={styles.IntroHello}>
							Hello, my name is
						</span>
						<span className={styles.IntroName}>Thiago Afonso</span>
					</div>
					<h1 className={styles.frontTitle}>
						<Typewriter
							options={{
								strings: ['Developer', 'Designer', 'Artist'],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
				</div>
			</section>
		</section>
	);
}
