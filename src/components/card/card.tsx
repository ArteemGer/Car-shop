import { NavLink } from 'react-router-dom';
import { Flower } from '../../stores/FlowerStore';
import styles from '../card/card.module.css'

interface Props {
    flower: Flower;
}

export function Card({ flower }: Props) {
    return (
        <NavLink to={`/car/${flower.id}`}>
            <div className={styles.card}>
                <img src={flower.image} alt={flower.name} />
                <h2>{flower.name}</h2>
                <div className={styles.price}>
                    <p>{flower.price}$</p>
                </div>
            </div>
        </NavLink>
    )
}