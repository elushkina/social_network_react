import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Textarea} from "../common/FormsControls/FormsControls";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>)


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div> {messagesElements} </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='Enter message'/>
            </div>
            <div>
                <Field component='button'>Send</Field>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
