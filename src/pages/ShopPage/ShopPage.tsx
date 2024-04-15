import styles from '../ShopPage/ShopPage.module.css'
import { useFlowersStore } from '../../store'
import { Card } from '../../components/card/card'
import { Tools } from '../../components/tools/tools'
import { useMemo, useState } from 'react'



export function Shop() {

    const [searchQuery, setSearchQuery] = useState('');
    const [reverse, setReverse] = useState(false);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    }

    const allFlowers = useFlowersStore(state => state.flowers);
    const [sortBy, setSortBy] = useState('Name');

    const sortedFlowers = useMemo(() => {
        if (sortBy === 'Price') {
            return useFlowersStore.getState().sortByPrice();
        } else if (sortBy === 'Rate') {
            return useFlowersStore.getState().sortByRating();
        } else if (sortBy === 'Name') {
            return useFlowersStore.getState().sortByName();
        } else {
            return allFlowers;
        }
    }, [sortBy, allFlowers]);

    const filteredFlowers = useMemo(() => {
        let result = sortedFlowers;
        if (searchQuery) {
          result = useFlowersStore.getState().search(searchQuery);
        }
        if (reverse) {
          result = result.reverse();
        }
        return result;
      }, [sortedFlowers, searchQuery, reverse]);

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.App}>
                    <div className={styles.tools}>
                        <Tools onCategoryChange={setSortBy} onSearchQueryChange={handleSearch} onReverseChange={setReverse} reverse={reverse}/>
                    </div>
                    <div className={styles.cards}>
                        {filteredFlowers.map((flower) => (
                            <Card
                                key={flower.id}
                                flower={flower}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}