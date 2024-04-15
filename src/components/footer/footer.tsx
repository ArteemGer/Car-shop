import { Info } from "../info/info"
import { Contact } from "../contact/contact"
import { Links } from "../links/links"
import styles from '../footer/footer.module.css'

export function Footer(){
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <Info/> 
                <Links/> 
                <Contact/> 
            </div>
        </footer>

        </>
    )
}