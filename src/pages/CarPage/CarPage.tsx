import { NavLink, Params, useParams } from 'react-router-dom'
import styles from '../CarPage/CarPage.module.css'
import { useFlowersStore } from '../../stores/FlowerStore';

export function CarPage () {

    const { id } = useParams<Params>();
    const car = id ? useFlowersStore.getState().getCarId(parseInt(id)) : null;
    
    if (!car) {
        return <div>Car not found</div>
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.car}>
                    <div className={styles.btn}>
                        <NavLink to={'/shop'} className={styles.btnBack}>Back to shop</NavLink>
                    </div>
                    <div className={styles.carInfo}>
                        <div className="img">
                            <img src={car.image} alt="car" className={styles.image} />
                        </div>
                        <div className={styles.carText}>
                        <h2>{car.name}</h2>
                            <div className={styles.feature}>
                                <p>Country: {car.country}</p>
                                <p>Engine: {car.engine}</p>
                                <p>Colors: {car.colors}</p>
                                <p>Year: {car.year}</p>
                                <p>Price: {car.price}$</p>
                                <p>Number of seats: {car.seats}</p>
                            </div>
                            <div className={styles.carDesc}>
                                <h2>Description</h2>
                                <p>{car.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}