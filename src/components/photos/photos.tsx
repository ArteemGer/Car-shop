import styles from '../photos/photos.module.css'

export function Photos() {
    return(
        <>
            <div className={styles.flowers}>
                <img src="/BMW X5.svg" alt="car1" />
                <img src="/Toyota RAF 4.svg" alt="car2" />
                <img src="/Lamborghini Urus.svg" alt="car3" />
                <img src="/Hyundai Genesis G80.svg" alt="car4" />
                <img src="/Porsche cayman.svg" alt="car5" />
                <img src="/Audi q7.svg" alt="car6" />
            </div>
        </>
    )
}