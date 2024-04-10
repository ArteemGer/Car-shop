import { Title } from '../../components/title/title'
import { Photos } from '../../components/photos/photos'
import { Between } from '../../components/between/between'
import { Review } from '../../components/review/review'
import { Card } from '../../components/card/card'
import styles from './home.module.css'
import { create } from "zustand";

interface Flower {
    id:number;
    name:string;
    price:number;
    description:string;
    image:string;
    rating:number;
}
interface FlowersState {
    flowers: Flower[];
    loading: boolean;
    error: null | string;
    bestSales: () => Flower[];
}
export const useFlowersStore = create<FlowersState>()((set) => ({
    flowers: [
        { id: 1, name: 'flower 1', price: 10, description: 'lorem', image: '/flower1.png', rating: 5, },
        { id: 2, name: 'flower 2', price: 11, description: 'lorem', image: '/flower2.png', rating: 4, },
        { id: 3, name: 'flower 3', price: 12, description: 'lorem', image: '/flower3.png', rating: 5, },
        { id: 4, name: 'flower 4', price: 13, description: 'lorem', image: '/flower4.png', rating: 5, },
        { id: 5, name: 'flower 5', price: 14, description: 'lorem', image: '/flower5.png', rating: 5, },
        { id: 6, name: 'flower 6', price: 15, description: 'lorem', image: '/flower6.png', rating: 3, },
        { id: 7, name: 'flower 7', price: 16, description: 'lorem', image: '/flower7.png', rating: 5, },
        { id: 8, name: 'flower 8', price: 17, description: 'lorem', image: '/flower8.png', rating: 5, },
    ] as Flower[],
    loading: false,
    error: null,
    bestSales: () => {
            const sortedFlowers: Flower[] = [...useFlowersStore.getState().flowers].sort((a, b) => b.rating - a.rating);
            return sortedFlowers.slice(0,4);
    },
}))

export function Home() {

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
                            name = {flower.name}
                            price = {flower.price}
                            image = {flower.image}
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