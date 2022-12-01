import { Atom } from "phosphor-react";
import styles from './header.module.css'
import { RiLightbulbLine } from "react-icons/Ri";
import { RiGithubFill, RiLinkedinFill, RiInstagramFill } from 'react-icons/Ri'
import { useEffect, useState } from "react";
import { BsFillSquareFill } from "react-icons/Bs";

export function Header() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.nameAndRole}>
                    <a href="#">
                        <Atom className={styles.atom} size={50} />
                    </a>
                </div>
                <div className={styles.finalHeader}>
                    <a href="#">next</a>
                    <a href="././cv.pdf" target="blank">cv</a>
                </div>
            </header>
            <div className={styles.leftHeader}>
                <ul title="LinkedIn Profile" className={styles.linkButtons}>
                    <a href="https://www.linkedin.com/in/thiagoalcarvalho/" target="blank" title="LinkedIn Profile Icon">
                        <RiLinkedinFill size={25} title="LinkedIn Profile Icon" />
                    </a>
                </ul>
                <ul title="GitHub Profile" className={styles.linkButtons}>
                    <a href="https://github.com/thiago-lcarvalho" target="blank" title="GitHub Profile Icon">
                        <RiGithubFill size={25} title="GitHub Profile Icon" />
                    </a>
                </ul>
                <ul title="Instagram Profile" className={styles.linkButtons}>
                    <a href="https://www.instagram.com/sothiagomesmo/" target="blank" title="Instagram Profile">
                        <RiInstagramFill size={25} title="Instagram Profile Icon" />
                    </a>
                </ul>
            </div>
            <div className={styles.rightHeader} >
                <a href="mailto:thiagoafonso07@hotmail.com">thiagoafonso07@hotmail.com</a>
            </div>
            <ul className={styles.selectorRight}>
                <li>
                    <a href="#1"><BsFillSquareFill color="#6640E7"/></a>
                </li>
                <li>
                    <a href="#2"><BsFillSquareFill color="#40EE97"/></a>
                </li>
                <li>
                    <a href="">3</a>
                </li>
            </ul>
        </>
    )
}