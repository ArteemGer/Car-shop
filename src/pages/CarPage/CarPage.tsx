import { NavLink } from 'react-router-dom'
import styles from '../CarPage/CarPage.module.css'

export function CarPage () {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.car}>
                    <div className={styles.btn}>
                        <NavLink to={'/shop'} className={styles.btnBack}>Back to shop</NavLink>
                    </div>
                    <div className={styles.carInfo}>
                        <div className="img">
                            <img src="/Audi q7.svg" alt="car" className={styles.image} />
                        </div>
                        <div className={styles.carText}>
                        <h2>Audi Q7</h2>
                            <div className={styles.feature}>
                                <p>Country:</p>
                                <p>Engine:</p>
                                <p>Colors:</p>
                                <p>Year:</p>
                                <p>Price:</p>
                                <p>Number of seats:</p>
                            </div>
                            <div className={styles.carDesc}>
                                <h2>Описание</h2>
                                <p>text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}