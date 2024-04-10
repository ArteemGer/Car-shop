import styles from '../shop/shop.module.css'
import { useFlowersStore } from '../../../store'
import { Card } from '../../components/card/card'
import { Tools } from '../../components/tools/tools'
import { useMemo, useState } from 'react'

export function Shop() {

    const allFlowers = useFlowersStore(state => state.flowers)
    const [sortBy, setSortBy] = useState('Name')

    const sortedFlowers = useMemo(() => {
        if (sortBy === 'Price') {
            return useFlowersStore.getState().sortByPrice()
        } else if(sortBy === 'Rate') {
            return useFlowersStore.getState().sortByRating()
        } else if(sortBy === 'Name') {
            return useFlowersStore.getState().sortByName()
        } else {
            return allFlowers
        }
    }, [sortBy])

    return(
        <>
            <div className={styles.mainContainer}>
                <div className={styles.App}>
                    <div className={styles.tools}>
                        <Tools onCategoryChange={setSortBy} />
                    </div>
                    <div className={styles.cards}>
                        {sortedFlowers.map((flower) => (
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