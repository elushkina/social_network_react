import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/langes-96px-Globe_icon.svg.png'
                alt=''/>
        </header>
    )
}
export default Header;
