import styles from '../card/card.module.css'

export function Card() {
    return (
        <>
            <div className={styles.card}>
                <img src="/flower1.png" alt="" />
                <h2>Название</h2>
                <div className={styles.price}>
                    <p>10$</p>
                    <button className={styles.addButton}>
                        <img src="/cart.png" alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}