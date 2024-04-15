import { useCartStore } from '../../store'
import { CartItem } from '../../components/cartItem/cartItem'
import styles from './CartPage.module.css'

export function Cart() {

    const cartItems = useCartStore(state => state.getCartItems())
    const hasItems = cartItems.length > 0
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    return (
        <>
            <div className={styles.cartContainer}>
                <div className={styles.empty}>
                    <div className={styles.cart}>
                        {!hasItems && <h1>Your cart is empty</h1>}
                        {hasItems && (
                            <>
                            <h1>Your cart</h1>
                            <div className={styles.items}>
                                <div className={styles.cartItems}>
                                    {cartItems.map(item => (
                                        <CartItem key={item.id} flower={item} quantity={item.quantity}/>
                                    ))}
                                </div>
                                <div className={styles.fullPrice}>
                                    Subtotal for {cartItems.length} items: {totalPrice}$
                                    <a href="/"><button className={styles.btn}>Checkout</button></a>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}