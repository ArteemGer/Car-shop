import { Flower, useCartStore } from '../../store'
import styles from './cartItem.module.css'


export function CartItem({ flower, quantity }: { flower: Flower; quantity: number }) {

    const remove = () => useCartStore.getState().removeFromCart(flower.id)
    const plus = () => useCartStore.getState().plusQuantity(flower.id)
    const minus = () => useCartStore.getState().minusQuantity(flower.id)

    return(
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={flower.image} />
                </div>
                <div className={styles.info}>
                    <div className={styles.firstInfo}>
                        <h1>{flower.name}</h1>
                        <button className={styles.del} onClick={remove}>
                            <img src="/delete.svg" alt="" />
                        </button>
                    </div>
                    <div className={styles.secondInfo}>
                        <p className={styles.price}>unit price {flower.price}$</p>
                        <div className={styles.moreInfo}>
                            <div className={styles.addAndRemove}>
                                <button className={styles.btn} onClick={minus}>-</button>
                                <p>{quantity}</p>
                                <button className={styles.btn} onClick={plus}>+</button>
                            </div>
                            <p className={styles.total}>total {flower.price * quantity}$</p>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    )
}