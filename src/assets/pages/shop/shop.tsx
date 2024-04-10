import styles from '../shop/shop.module.css'
import { useFlowersStore } from '../home/home'
import { Card } from '../../components/card/card'
import { Tools } from '../../components/tools/tools'

export function Shop() {

    const allFlowers = useFlowersStore(state => state.flowers)

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.App}>
                    <div className={styles.tools}>
                        <Tools />
                    </div>
                    <div className={styles.cards}>
                        {allFlowers.map((flower) => (
                            <Card 
                                name = {flower.name}
                                price = {flower.price}
                                image = {flower.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}