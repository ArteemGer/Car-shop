import { useCartStore } from '../../stores/CartStore';
import { Flower } from '../../stores/FlowerStore';
import styles from '../card/card.module.css'

interface Props {
    flower: Flower;
}

export function Card({ flower }: Props) {
    return (
        <>
            <div className={styles.card}>
                <img src={flower.image} alt={flower.name} />
                <h2>{flower.name}</h2>
                <div className={styles.price}>
                    <p>{flower.price}$</p>
                    <a className={styles.addButton} onClick={() => useCartStore.getState().addToCart(flower)}>
                        <img src="/cart.png" alt="" />
                        Add to cart
                    </a>
                </div>
            </div>
        </>
    )
}