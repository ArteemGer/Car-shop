import styles from '../title/title.module.css'
import { NavLink } from 'react-router-dom'


export function Title() {
    return(
        <>
            <div>
                <h1 className={styles.titleText}>Cars,🚗 <br /> what the world needs</h1>
                <p className={styles.disc}>Browse between hundreds of cars</p>
                <NavLink to={'/shop'}><button className={styles.button}>Browse</button></NavLink>
            </div>
        </>
    )
}