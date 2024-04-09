import styles from '../photos/photos.module.css'

export function Photos() {
    return(
        <>
            <div className={styles.flowers}>
                <img src="/flower1.png" alt="flower1" />
                <img src="/flower2.png" alt="flower2" />
                <img src="/flower3.png" alt="flower3" />
                <img src="/flower4.png" alt="flower4" />
                <img src="/flower5.png" alt="flower5" />
                <img src="/flower6.png" alt="flower6" />
            </div>
        </>
    )
}