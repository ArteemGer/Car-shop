import styles from '../menu/menu.module.css'

export function Menu(){
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <a className={styles.navLink} href="/">Home</a>
                </div>
                <div className={styles.navItem}>
                    <a className={styles.navLink} href="/shop">Shop</a>
                </div>
            </nav> 
        </>
    )
}