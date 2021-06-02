import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} 
                 sendMessage={onSendMessageClick}
                 dialogsPage={state} />
    );
}

export default DialogsContainer;