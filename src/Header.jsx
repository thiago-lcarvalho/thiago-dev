import { Atom } from 'phosphor-react';
import styles from './header.module.css';
import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/Ri';
import { HiDocumentText } from 'react-icons/Hi';
import { MdOutlineEmail } from 'react-icons/Md';
import { BsFillSquareFill } from 'react-icons/Bs';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';

export function Header() {
	const [isInPT, setIsInPT] = useState(false);

	useEffect(() => {
		const defaultLanguage = navigator.language || navigator.languages[0];
		if (defaultLanguage.substring(0, 2) === 'pt') {
			setIsInPT(true);
		}
	}, []);

	return (
		<>
			<header className={styles.header}>
				<div className={styles.nameAndRole}>
					<a href="#">
						<Atom
							className={styles.atom}
							size={40}
						/>
						<Avatar
							className={styles.introPhoto}
							sx={{ width: 40, height: 40 }}
							alt="Thiago Afonso"
							src="/assets/important-photo-2.png"
						/>
					</a>
					<span>{isInPT ? 'obrigado pela visita' : 'thank you for visiting'} ❤️</span>
				</div>
			</header>
			<div className={styles.leftHeader}>
				<ul
					title={isInPT ? "Perfil LinkedIn" : "LinkedIn Profile"}
					className={styles.linkButtons}
				>
					<a
						href="https://www.linkedin.com/in/thiagoalcarvalho/"
						target="blank"
						title={isInPT ? "Perfil LinkedIn" : "LinkedIn Profile"}
					>
						<RiLinkedinFill
							size={25}
							title={isInPT ? "Perfil LinkedIn" : "LinkedIn Profile"}
						/>
					</a>
				</ul>
				<ul
					title={isInPT ? "Perfil GitHub" : "GitHub Profile"}
					className={styles.linkButtons}
				>
					<a
						href="https://github.com/thiago-lcarvalho"
						target="blank"
						title={isInPT ? "Perfil GitHub" : "GitHub Profile"}
					>
						<RiGithubFill
							size={25}
							title={isInPT ? "Perfil GitHub" : "GitHub Profile"}
						/>
					</a>
				</ul>
				<ul
					title={isInPT ? "Perfil Instagram" : "Instagram Profile"}
					className={styles.linkButtons}
				>
					<a
						href="https://www.instagram.com/sothiagomesmo/"
						target="blank"
						title={isInPT ? "Perfil Instagram" : "Instagram Profile"}
					>
						<RiInstagramFill
							size={25}
							title={isInPT ? "Perfil Instagram" : "Instagram Profile"}
						/>
					</a>
				</ul>
				<ul
					title={isInPT ? "Enviar E-mail" : "Send E-mail"}
					className={styles.linkButtons}
				>
					<a
						href="mailto:eu@thiagoafonso.com"
						target="blank"
						title={isInPT ? "Enviar E-mail" : "Send E-mail"}
					>
						<MdOutlineEmail size={25} />
					</a>
				</ul>
				<ul className={styles.linkButtons}>
					<a
						href={isInPT ? "/assets/cv-PT.pdf" : "/assets/cv.pdf"}
						target="blank"
						title={isInPT ? "Abrir Currículo" : "Open CV"}
					>
						<HiDocumentText size={25} />
					</a>
				</ul>
			</div>
			<ul className={styles.selectorRight}>
				<li>
					<a href="/#1">
						<BsFillSquareFill color="#6640E7" />
					</a>
				</li>
				<li>
					<a href="/#2">
						<BsFillSquareFill color="#40EE97" />
					</a>
				</li>
				<li>
					<a href="/#3">
						<BsFillSquareFill color="#ee4080" />
					</a>
				</li>
				<li>
					<a href="/#4">
						<BsFillSquareFill color="#3C79F5" />
					</a>
				</li>
			</ul>
		</>
	);
}
