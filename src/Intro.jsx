import styles from './intro.module.css';
import moment from 'moment';
import { Hourglass } from 'phosphor-react';



export function Intro() {
    var timeStartedDev = moment("2022-07-06T18:00:00Z");
    var timeNow = moment();
    const hoursSinceStartedDev = (timeNow.diff(timeStartedDev, 'hours'))


    return (
        <section>
        <div className={styles.introMainWrapper}>
            <div>
            <div className={styles.contentIntro}>
                <span className={styles.IntroHello}>Hello, my name is </span>
                <span className={styles.IntroName}>Tiago Carvalho</span>
            </div>
            <h1 className={styles.frontTitle}>
                Frontend Developer
            </h1>
            </div>
        </div>
        </section>
    )
}