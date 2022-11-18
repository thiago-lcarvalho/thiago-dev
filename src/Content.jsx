import styles from './content.module.css';

export function Content() { 
    return (
        <div className={styles.contentMainWrapper}>
        <h1>
                Lorem ipsum
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.

        </h1>
        <p className={styles.contentP}>
            Lorem ipsum dolor sit okkkkkkkkkkkamet consectetur
            <br />adipisicing elit. Cumque culpa unde
            <br />laudantium quasi blanditiis at illum asperiores error 
            <br />obcaecati totam iusto tempora nostrum, incidunt eius quae, quisquam magni aut fugit.
        </p>
        </div>
    )
}