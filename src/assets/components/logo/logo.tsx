import styles from '../logo/logo.module.css'

export function Logo(){
    return (
        <>
            <div className="icon">
            <a className={styles.iconLink} href="/"><span className={styles.mainWord}>Flower</span>Shop</a>
            </div>
        </>
    )
}