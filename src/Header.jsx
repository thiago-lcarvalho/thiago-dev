import { Atom } from "phosphor-react";
import styles from './header.module.css'
import { RiLightbulbLine } from "react-icons/Ri";
import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/Ri'
import { useEffect, useState } from "react";

export function Header() {

    // const [theme, setTheme] = useState("dark");
    // const toggleTheme = () => {
    //   if (theme === "light") {
    // 	setTheme("dark");
    //   } else {
    // 	setTheme("light");
    //   }
    // };

    // useEffect(() => {
    //   document.body.className = theme;
    // });

    return (
        <>
            <header className={styles.header}>
                <div className={styles.nameAndRole}>
                    <Atom className={styles.atom} size={50} />
                    <ul>front-end</ul>
                    <ul>artist</ul>
                    {/* <div className={styles.buttonDiv}>
					<div className={`${theme}`}>
						<button className="switch" onClick={toggleTheme}>
							<RiLightbulbLine className={`${theme}`} size={28} />
						</button>
					</div>
				</div> */}
                </div>
                {/* <div className={styles.link}>
				<a href="https://www.linkedin.com/in/thiagoalcarvalho/" target="_blank">
					in
				</a>
				<a href="https://github.com/thiago-lcarvalho" target="_blank">
                gh
                </a>
				<a href="#">cv</a>
                
			</div> */}
                <div className={styles.finalHeader}>
                    <a href="#">about</a>
                    <a href="#">next</a>
                    <a href="#">cv</a>
                </div>
            </header>
            <div className={styles.leftHeader}>
                <ul>
                    <a href="https://www.linkedin.com/in/thiagoalcarvalho/" target="blank">
                        <RiLinkedinFill size={25} />
                    </a>
                </ul>
                <ul>
                    <a href="https://github.com/thiago-lcarvalho" target="blank">
                        <RiGithubFill size={25} />
                    </a>
                </ul>
                <ul>
                    <a href="https://www.instagram.com/sothiagomesmo/" target="blank">
                        <RiInstagramFill size={25} />
                    </a>
                </ul>
            </div>
            <div className={styles.rightHeader} >
                <a href="mailto:thiagoafonso07@hotmail.com">thiagoafonso07@hotmail.com</a>
            </div>
        </>
    )
};