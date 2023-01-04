import styles from './contact.module.css';

export function Contact() {
	return (
		<section className={styles.contentMainWrapper}>
			<a name="4"></a>
			<div className={styles.boxDiv}>
				<span className={styles.contactFirst}>Get in touch!</span>
				<span className={styles.contactSecond}>Get in touch!</span>
				<div className={styles.bar}></div>
				<p className={styles.contactP}>
					I am currently seeking new challenges in the tech industry!{' '}
					<br />
					If you have a potential project or position that aligns with
					my skills and experience, reach out! <br />I am constantly
					on the lookout for opportunities to challenge myself and
					make a meaningful impact.
				</p>
				<div className={styles.bar2}></div>
				<div className={styles.buttonContainer}>
					<a href="mailto:eu@thiagoafonso.com">
					<button
						className={styles.contactButton}
						role="button"
					>
						Say Hello
					</button>
					</a>
				</div>
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
