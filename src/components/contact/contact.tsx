import styles from '../contact/contact.module.css'

export function Contact(){
    return (
        <>
            <div className="contacts">
                <h2 className={styles.contactTitle}>Contact</h2>
                <ul>
                    <li className={styles.contactItem}>
                        <img src="/position.png" />
                        <p>6437 Nolan Forks Suite 131</p>
                    </li>
                    <li className={styles.contactItem}>
                        <img src="/email.png" />
                        <p>FlowerShop@gmail.com</p>
                    </li>
                    <li className={styles.contactItem}>
                        <img src="/phone.png" />
                        <p>+7 999 999 99 99</p>
                    </li>
                </ul>
            </div>
        </>
    )
}