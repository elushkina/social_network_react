import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/happy.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img src={logo} alt=''/>
                <div className={styles.loginBlock}>
                    {props.isAuth
                        ? <div><span>{props.login}</span><button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>

        </header>
    )
}
export default Header;
