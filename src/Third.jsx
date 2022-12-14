import styles from './third.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export function Third() {
	return (
		<section>
			<a name="3"></a>
			<div className={styles.contentMainWrapper}>
				<div className={styles.box1Div}>
                    <h1>lorem ipsum</h1>
                    <p>lorem ipsum blablablabla ok ok</p>
                    <p>lorem blabla ok </p>
				</div>
				<div className={styles.box2Div}>
				</div>
				<div className={styles.box3Div}>
				</div>
			</div>
		</section>
	);
}
