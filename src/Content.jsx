import styles from './content.module.css';
import moment from 'moment';
import { Hourglass } from 'phosphor-react';


export function Content() {

    var timeStartedDev = moment("2022-07-06T18:00:00Z");
    var timeNow = moment();
    const hoursSinceStartedDev = (timeNow.diff(timeStartedDev, 'hours'))

    return (
        <section>
        <div className={styles.contentMainWrapper}>
            <div>
                <div className={styles.hoursSinceDiv} >
                    <span className={styles.hoursSince}>{hoursSinceStartedDev}
                    </span>
                    <span className={styles.hoursSinceText}>
                        hours<br />spent<br />coding|studying
                    </span>
                    <p className={styles.hoursSinceHiddenText}>on 06/07/2022 I made the decision to become a developer</p>
                </div>
            </div>
        </div>
        </section>
    )
}