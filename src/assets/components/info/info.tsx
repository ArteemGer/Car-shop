import { Logo } from "../logo/logo"
import styles from '../info/info.module.css'

export function Info(){
    return (
        <>
        <div className={styles.info}>
            <Logo />
            <p className={styles.infoText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, praesentium rem. Facilis repudiandae ab officiis quisquam commodi minus, quis, nisi, cum provident alias aliquam quam dolorum. Error voluptate perferendis.</p>
        </div>
        </>
    )
}