import styles from '../card/card.module.css'

interface Props {
    name: string;
    price: number;
    image: string;
}

export function Card({name, price, image}:Props) {
    return (
        <>
            <div className={styles.card}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <div className={styles.price}>
                    <p>{price}$</p>
                    <button className={styles.addButton}>
                        <img src="/cart.png" alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}