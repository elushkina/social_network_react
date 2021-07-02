import React from 'react';
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile' activeClassName={styles.active__link}>Моя&nbsp;страница</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs' activeClassName={styles.active__link}>Сообщения</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/users' activeClassName={styles.active__link}>Пользователи</NavLink>
            </div>
            <div className={styles.item}>
                <a>Новости</a>
            </div>
            <div className={styles.item}>
                <a>Музыка</a>
            </div>
            <div className={styles.item}>
                <a>Настройки</a>
            </div>
        </nav>
    )
}
export default Navbar;
