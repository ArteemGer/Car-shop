import styles from '../tools/tools.module.css'
import React, { useState } from 'react';

interface ToolsProps {
    onCategoryChange: (category: string) => void
    onSearchQueryChange: (category: string) => void
}
export function Tools(props: ToolsProps) {
    const [showOptions, setShowOptions] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleOptions = () =>{
        setShowOptions(!showOptions)
        const radioButtons = document.querySelector('.' + styles.radioButtons);
        if (radioButtons) {
            radioButtons.classList.toggle(styles.noVid);
        }
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const category = event.target.value
        props.onCategoryChange(category)
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        props.onSearchQueryChange(event.target.value)
    }

    

    return (
        <>
            <div className={styles.tools}>
                <div className={styles.sorting}>
                    <button className={styles.button} onClick={toggleOptions}><img src="/sorting.png" alt="" />Sorting</button>
                        <div className={`${styles.radioButtons} ${styles.noVid}`}>
                            <label className={styles.radioInput}>
                                <input name='category' value='Name' type="radio" onChange={handleRadioChange}/>
                                <p>Name</p>
                            </label>
                            <label className={styles.radioInput}>
                                <input name='category' value='Rate' type="radio" onChange={handleRadioChange}/>
                                <p>Rate</p>
                            </label>
                            <label className={styles.radioInput}>
                                <input name='category' value='Price' type="radio" onChange={handleRadioChange}/>
                                <p>Price</p>
                            </label>
                        </div>
                </div>
                <div className="search">
                    <input className={styles.inputSearch} type="text" placeholder='Search...' onChange={handleSearchChange}/>
                </div>
                <div className="revers">
                    <button className={styles.button}><img src="/reverse.png" alt="" />Reverse</button>
                </div>
            </div>        
        </>
    )
}