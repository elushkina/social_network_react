import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialogs + ' ' + classes.active}>
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

    let dialogs = [
        {id: 1, name: 'Masha'},
        {id: 2, name: 'Dasha'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Glasha'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Kek'},
        {id: 3, message: 'Lol'},
        {id: 4, message: 'Bye'}
    ]
    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id} />)


    let messagesElement = messages
        .map( m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>

        </div>

    )
}
export default Dialogs;
