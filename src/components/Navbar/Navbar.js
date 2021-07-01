import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active__link}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active__link}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active__link}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;
