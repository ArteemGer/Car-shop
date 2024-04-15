import { Title } from '../../components/title/title'
import { Photos } from '../../components/photos/photos'
import { Between } from '../../components/between/between'
import { Review } from '../../components/review/review'
import { Card } from '../../components/card/card'
import styles from './HomePage.module.css'
import { useFlowersStore } from '../../stores/FlowerStore'


export function HomePage() {

    const bestFlowers = useFlowersStore(state => state.bestSales())

    return (
        <div className={styles.mainContainer}>
            <div className={styles.App}>
                <div className={styles.welcome}>
                    <Title />
                    <Photos />
                </div>
                <Between text = 'Best sales' />
                <div className={styles.cards}>
                    {bestFlowers.map((flower) => (
                        <Card 
                            key={flower.id}
                            flower={flower}
                        />
                    ))}
                </div>
                <Between text = 'Latest reviews' />
                <div className={styles.reviews}>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            </div>
        </div>

    )
}