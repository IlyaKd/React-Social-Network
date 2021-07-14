import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://freedesignfile.com/upload/2016/10/Nature-logo-design-vectors-03.jpg'/>
        <div className={classes.loginBlock}>
            { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
        </header>
    )
}

export default Header;