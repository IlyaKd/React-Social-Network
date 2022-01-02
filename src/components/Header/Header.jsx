import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src='https://freedesignfile.com/upload/2016/10/Nature-logo-design-vectors-03.jpg'/>
        <div className={classes.loginBlock}>
            { props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
        </header>
    )
}

export default Header;