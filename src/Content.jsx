import styles from './content.module.css';
import moment from 'moment';
import Paper from "@mui/material/Paper";
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'


export function Content() {

    var timeStartedDev = moment("2022-07-06T18:00:00Z");
    var timeNow = moment();
    const hoursSinceStartedDev = (timeNow.diff(timeStartedDev, 'hours'))



    return (
        <section>
            <div className={styles.contentMainWrapper}>
                <ul className={styles.ul1}>
                    <li>
                        <SiJavascript size={40} />
                    </li>
                    <li>
                        <SiHtml5 size={40} />
                    </li>
                    <li>
                        <SiCss3 size={40} />
                    </li>
                </ul>
                <div className={styles.paperDiv}>
                    <div className={styles.contentMainDiv}>
                        <div className={styles.hoursSinceDiv} >
                            <span className={styles.hoursSince}>{hoursSinceStartedDev}
                            </span>
                            <span className={styles.hoursSinceText}>
                                hours<br />spent<br />coding|studying
                            </span>
                        </div>
                        <span className={styles.hoursSinceHiddenText}>on 06/07/2022 I made the decision to become a developer</span>
                    </div>
                </div>
            </div>
        </section>
    )
}