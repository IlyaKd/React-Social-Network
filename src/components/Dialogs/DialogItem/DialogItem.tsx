import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

type PropsType = {
    id: number
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + '' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;