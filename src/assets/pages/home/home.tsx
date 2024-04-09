import { Title } from '../../components/title/title'
import { Photos } from '../../components/photos/photos'
import { Between } from '../../components/between/between'
import { Review } from '../../components/review/review'
import { Card } from '../../components/card/card'
import styles from './home.module.css'


export function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.App}>
                <div className={styles.welcome}>
                    <Title />
                    <Photos />
                </div>
                <Between text = 'Best sales' />
                <div className={styles.cards}>
                    <Card />
                    <Card /> 
                    <Card />
                    <Card />
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