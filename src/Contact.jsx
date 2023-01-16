import styles from './contact.module.css';
import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/Ri';
import { HiDocumentText } from 'react-icons/Hi';
import { MdOutlineEmail } from 'react-icons/Md';

export function Contact() {

	return (
		<section className={styles.contentMainWrapper}>
			<a name="4"></a>
			<div className={styles.boxDiv}>
				<span className={styles.contactFirst}>Get in touch!</span>
				<div className={styles.bar}></div>
				<p className={styles.contactP}>
					I am currently seeking new challenges in the tech industry!<br/>
					If you have a potential project or position that aligns with
					my skills and experience, reach out!
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
			<div className={styles.finalHeader}>
				<ul
					title="LinkedIn Profile"
					className={styles.linkButtons}
				>
					<a
						href="https://www.linkedin.com/in/thiagoalcarvalho/"
						target="blank"
						title="LinkedIn Profile"
					>
						<RiLinkedinFill
							size={25}
							title="LinkedIn Profile"
						/>
					</a>
				</ul>
				<ul
					title="GitHub Profile"
					className={styles.linkButtons}
				>
					<a
						href="https://github.com/thiago-lcarvalho"
						target="blank"
						title="GitHub Profile"
					>
						<RiGithubFill
							size={25}
							title="GitHub Profile"
						/>
					</a>
				</ul>
				<ul
					title="Instagram Profile"
					className={styles.linkButtons}
				>
					<a
						href="https://www.instagram.com/sothiagomesmo/"
						target="blank"
						title="Instagram Profile"
					>
						<RiInstagramFill
							size={25}
							title="Instagram Profile"
						/>
					</a>
				</ul>
				<ul
					title="Send E-mail"
					className={styles.linkButtons}
				>
					<a
						href="mailto:eu@thiagoafonso.com"
						target="blank"
						title="Send E-mail"
					>
						<MdOutlineEmail size={25} />
					</a>
				</ul>
				<ul className={styles.linkButtons}>
					<a
						href="././cv.pdf"
						target="blank"
						title="Open CV"
					>
						<HiDocumentText size={25} />
					</a>
				</ul>
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
