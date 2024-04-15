import { useCartStore } from '../../stores/CartStore'
import { CartItem } from '../../components/cartItem/cartItem'
import styles from './CartPage.module.css'

export function CartPage() {

    const cartItems = useCartStore(state => state.getCartItems())
    const hasItems = cartItems.length > 0
    const totalPrice = cartItems.reduce((acc, item) => acc + item.flower.price * item.quantity, 0);
    
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
                                        <CartItem key={item.flower.id} flower={item.flower} quantity={item.quantity}/>
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