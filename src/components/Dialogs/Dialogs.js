import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)

    let messagesElements = state.messages
        .map( m => <Message message={m.message} key={m.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
       let body = event.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                { dialogsElements }
            </div>
            <div className={styles.messages}>
                <div> { messagesElements } </div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter message'/></div>
                    <div><button onClick= { onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>

    )
}
export default Dialogs;
