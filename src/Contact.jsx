import styles from './contact.module.css';
import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/Ri';
import { HiDocumentText } from 'react-icons/Hi';
import { MdOutlineEmail } from 'react-icons/Md';
import { useState, useEffect } from 'react';

export function Contact() {
	const [isInPT, setIsInPT] = useState(false);

	useEffect(() => {
		const defaultLanguage = navigator.language || navigator.languages[0];
		if (defaultLanguage.substring(0, 2) === 'pt') {
			setIsInPT(true);
		}
	}, []);

	return (
		<section className={styles.contentMainWrapper}>
			<a name="4"></a>
			<div className={styles.boxDiv}>
				<span className={styles.contactFirst}>
					{isInPT ? 'Fala comigo!' : 'Get in touch!'}
				</span>
				<div className={styles.bar}></div>
				<p className={styles.contactP}>
					{isInPT
						? 'Eu estou procurando novos desafios na indústria de tecnologia!'
						: 'I am currently seeking new challenges in the tech industry!'}
					<br />
					{isInPT
						? 'Se você tiver um projeto ou vaga que alinhe com minhas habilidades e experiência, entre em contato!'
						: 'If you have a potential project or position that aligns with my skills and experience, reach out!'}
				</p>
				<div className={styles.bar2}></div>
				<div className={styles.buttonContainer}>
					<a href="mailto:eu@thiagoafonso.com">
						<button
							className={styles.contactButton}
							role="button"
						>
							{isInPT ? 'Manda um oi!' : 'Say hello!'}
						</button>
					</a>
				</div>
			</div>
			<div className={styles.finalHeader}>
				<ul
					title={isInPT ? 'Perfil LinkedIn' : 'LinkedIn Profile'}
					className={styles.linkButtons}
				>
					<a
						href="https://www.linkedin.com/in/thiagoalcarvalho/"
						target="blank"
						title={isInPT ? 'Perfil LinkedIn' : 'LinkedIn Profile'}
					>
						<RiLinkedinFill
							size={25}
							title={
								isInPT ? 'Perfil LinkedIn' : 'LinkedIn Profile'
							}
						/>
					</a>
				</ul>
				<ul
					title={isInPT ? 'Perfil GitHub' : 'GitHub Profile'}
					className={styles.linkButtons}
				>
					<a
						href="https://github.com/thiago-lcarvalho"
						target="blank"
						title={isInPT ? 'Perfil GitHub' : 'GitHub Profile'}
					>
						<RiGithubFill
							size={25}
							title={isInPT ? 'Perfil GitHub' : 'GitHub Profile'}
						/>
					</a>
				</ul>
				<ul
					title={isInPT ? 'Perfil Instagram' : 'Instagram Profile'}
					className={styles.linkButtons}
				>
					<a
						href="https://www.instagram.com/sothiagomesmo/"
						target="blank"
						title={
							isInPT ? 'Perfil Instagram' : 'Instagram Profile'
						}
					>
						<RiInstagramFill
							size={25}
							title={
								isInPT
									? 'Perfil Instagram'
									: 'Instagram Profile'
							}
						/>
					</a>
				</ul>
				<ul
					title={isInPT ? 'Enviar E-mail' : 'Send E-mail'}
					className={styles.linkButtons}
				>
					<a
						href="mailto:eu@thiagoafonso.com"
						target="blank"
						title={isInPT ? 'Enviar E-mail' : 'Send E-mail'}
					>
						<MdOutlineEmail size={25} />
					</a>
				</ul>
				<ul className={styles.linkButtons}>
					<a
						href={isInPT ? '/assets/cv-PT.pdf' : '/assets/cv.pdf'}
						target="blank"
						title={isInPT ? 'Abrir Currículo' : 'Open CV'}
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
				{isInPT
					? 'projetado e construído por Thiago Afonso'
					: 'designed & built by Thiago Afonso'}
			</a>
		</section>
	);
}
