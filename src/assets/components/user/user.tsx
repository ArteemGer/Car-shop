import styles from '../user/user.module.css'
import { NavLink } from 'react-router-dom'

export function User(){
    return (
        <>
            <div className={styles.user}>
                <a href="/">
                    <img src="/user.png" alt="" />
                </a>
                <NavLink to='/cart'>
                    <img src="/cart.png" alt="" />
                </NavLink>
            </div>   
        </>
    )
}