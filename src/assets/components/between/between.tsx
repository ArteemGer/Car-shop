import styles from '../between/between.module.css'

export function Between({text}:{text:string}) {
    return (
        <div className={styles.between}>
            <hr />
            <p className={styles.betweenText}>{text}</p>
            <hr />
        </div>
    )
}