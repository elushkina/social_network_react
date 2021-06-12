import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <DialogItem name='Masha' id='1'/>
                <DialogItem name='Dasha' id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Glasha' id='4'/>

            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='Kek'/>
                <Message message='Lol'/>
                <Message message='Bye'/>
            </div>

        </div>

    )
}
export default Dialogs;
