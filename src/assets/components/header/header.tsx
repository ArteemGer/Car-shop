import { Menu } from "../menu/menu"
import { User } from "../user/user"
import { Logo } from "../logo/logo"
import styles from '../header/header.module.css'


export function Header(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Logo />
                    <Menu />
                    <User />
                </div>
            </header>
        </>
    )
}