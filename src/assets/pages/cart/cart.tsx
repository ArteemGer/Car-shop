import { useCartStore } from '../../../store'
import { CartItem } from '../../components/cartItem/cartItem'
import styles from './cart.module.css'

export function Cart() {

    const cartItems = useCartStore(state => state.getCartItems())
    const hasItems = cartItems.length > 0
    
    return (
        <>
            <div className={styles.cartContainer}>
                <div className={styles.empty}>
                    {!hasItems && <h1>Your cart is empty</h1>}
                    {hasItems && (
                        <>
                        <h1>Your cart</h1>
                        <div className={styles.items}>
                            {cartItems.map(item => (
                                <CartItem key={item.id} flower={item} quantity={item.quantity}/>
                            ))}
                        </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}