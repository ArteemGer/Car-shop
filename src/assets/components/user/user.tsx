import styles from '../user/user.module.css'

export function User(){
    return (
        <>
            <div className={styles.user}>
                <a href="/">
                    <img src="/user.png" alt="" />
                </a>
                <a href="/">
                    <img src="/cart.png" alt="" />
                </a> 
            </div>   
        </>
    )
}