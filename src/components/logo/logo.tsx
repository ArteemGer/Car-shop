import styles from '../logo/logo.module.css'

export function Logo(){
    return (
        <>
            <div className="icon">
                <a className={styles.iconLink} href="/"><span className={styles.mainWord}>Car</span>Shop</a>
            </div>
        </>
    )
}