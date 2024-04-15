import styles from '../title/title.module.css'

export function Title() {
    return(
        <>
        <div>
            <h1 className={styles.titleText}>Flowers,🌻 what the world needs</h1>
            <p className={styles.disc}>Browse between hundreds of flowers</p>
            <button className={styles.button}>Browse</button>
        </div>
        </>
    )
}