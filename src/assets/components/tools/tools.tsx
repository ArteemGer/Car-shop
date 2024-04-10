import styles from '../tools/tools.module.css'
import { useState } from 'react';


export function Tools() {

    const [showOptions, setShowOptions] = useState(false);
    
    const toggleOptions = () =>{
        setShowOptions(!showOptions)
    }

    return (
        <>
            <div className={styles.tools}>
                <div className={styles.sorting}>
                    <button className={styles.button} onClick={toggleOptions}><img src="/sorting.png" alt="" />Sorting</button>
                    {showOptions && (
                        <div className={styles.radioButtons}>
                            <label className={styles.radioInput}>
                                <input checked name='category' value='Name' type="radio" />
                                <p>Name</p>
                            </label>
                            <label className={styles.radioInput}>
                                <input name='category' value='Rate' type="radio" />
                                <p>Rate</p>
                            </label>
                            <label className={styles.radioInput}>
                                <input name='category' value='Popular' type="radio" />
                                <p>Popular</p>
                            </label>
                            <label className={styles.radioInput}>
                                <input name='category' value='Price' type="radio" />
                                <p>Price</p>
                            </label>
                        </div>
                    )}

                </div>
                <div className="search">
                    <input className={styles.inputSearch} type="text" placeholder='Search...'/>
                </div>
                <div className="revers">
                    <button className={styles.button}><img src="/reverse.png" alt="" />Reverse</button>
                </div>
            </div>        
        </>
    )
}