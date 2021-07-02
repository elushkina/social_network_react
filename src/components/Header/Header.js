import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/happy.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img src={logo} alt=''/>
            </div>
        </header>
    )
}
export default Header;
