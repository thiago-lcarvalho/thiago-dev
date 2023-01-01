import styles from './contact.module.css';
import Button from '@mui/material/Button';

export function Contact() {
	return (
		<section className={styles.contentMainWrapper}>
			<a name="4"></a>
			<div className={styles.boxDiv}>
				<span className={styles.contactFirst}>What's next</span>
				<span>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					<br />
					Illo incidunt dolorem facere rerum accusantium assumenda,
				</span>
				<Button
					onClick={() => {
						window.open(`mailto:eu@thiagoafonso.com`);
					}}
					variant="outlined"
				>
					Send E-mail
				</Button>
			</div>
			<a
				className={styles.contactLink}
				href="https://github.com/thiago-lcarvalho/thiago-dev"
				target="blank"
			>
				designed & built by Thiago Afonso
			</a>
		</section>
	);
}
