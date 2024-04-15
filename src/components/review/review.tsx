import styles from '../review/review.module.css'


export function Review() {
    return (
        <>
        <div className={styles.review}>
            <div className={styles.profileImage}>
                <img src="/hans.png" alt="" className={styles.profileImage} />
            </div>
            <div className={styles.reviewInfo}>
                <h2>Pepra</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet est illo ullam ducimus mollitia quo, quidem deleniti repellendus veritatis amet doloremque, quos fugiat suscipit quibusdam error, itaque expedita veniam quae!</p>
                <div className={styles.stars}>
                    <img src="/star.png" alt="" />
                    <img src="/star.png" alt="" />
                    <img src="/star.png" alt="" />
                    <img src="/star.png" alt="" />
                    <img src="/star.png" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}