import { NavLink } from 'react-router-dom'
import styles from '../menu/menu.module.css'

export function Menu(){
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to={'/Shop'}>Shop</NavLink>
                </div>
            </nav>
        </>
    )
}