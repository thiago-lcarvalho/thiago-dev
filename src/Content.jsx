import styles from './content.module.css';
import moment from 'moment';
import { Hourglass } from 'phosphor-react';



export function Content() {
    var timeStartedDev = moment("2022-07-06T18:00:00Z");
    var timeNow = moment();
    const hoursSinceStartedDev = (timeNow.diff(timeStartedDev, 'hours'))


    return (
        <div className={styles.contentMainWrapper}>
            <div className={styles.contentIntro}>
                <span className={styles.IntroHello}>Hello, my name is </span>
                <span className={styles.IntroName}>Thiago Carvalho</span>
            </div>
            <h1 className={styles.frontTitle}>
                Frontend Developer
            </h1>
            <div className={styles.hoursSinceDiv} >
            <span className={styles.hoursSince}>{hoursSinceStartedDev}</span>
            <span className={styles.hoursSinceText}>
                hours<br />spent<br />coding|studying
            </span>
            <Hourglass size={32} />
            </div>
        </div>
    )
}