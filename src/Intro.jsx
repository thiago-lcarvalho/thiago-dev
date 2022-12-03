import styles from './intro.module.css';
import moment from 'moment';
import { Hourglass } from 'phosphor-react';




export function Intro() {

    return (
        <section>
            <a name="1"></a>
            <div className={styles.introMainWrapper}>
                <div>
                    <div className={styles.contentIntro}>
                        <span className={styles.IntroHello}>Hello, my name is </span>
                        <span className={styles.IntroName}>Thiago Afonso</span>
                    </div>
                    <h1 className={styles.frontTitle}>
                        Frontend Developer
                    </h1>
                </div>
            </div>
        </section>
    )
}