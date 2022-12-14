import styles from './third.module.css';
import GitHubCalendar from 'react-github-calendar';

export function Third() {

    const sinceStart = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 2;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };


	return (
		<section>
			<a name="3"></a>
			<div className={styles.contentMainWrapper}>
				<div className={styles.box1Div}>
					<div className={styles.box1Heading}>
						<span>lorem ipsum</span>
					</div>
					<div className={styles.box1Content}>
						<p>lorem ipsum blablablabla ok ok</p>
						<p>lorem blabla ok </p>
					</div>
				</div>
                <a className={styles.box2link} href="https://github.com/thiago-lcarvalho" target='blank'>
				<div className={styles.box2Div}>
                <div className={styles.gitHubCalendar}>
						<GitHubCalendar
							username="thiago-lcarvalho"
                            transformData={sinceStart}
							hideColorLegend
                            hideMonthLabels
							blockSize={14}
							labels={{
								totalCount: '{{count}}',
							}}
						/>
						<span className={styles.gitHubCalendarText}>
                        github contributions <br />
                        in the last 2 months
						</span>
					</div>
                </div>
                </a>
				<div className={styles.box3Div}></div>
			</div>
		</section>
	);
}
