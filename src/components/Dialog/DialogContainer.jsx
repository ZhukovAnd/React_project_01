import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogReducer";
import Dialog from "./Dialog";


const DialogContainer = (props) => {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreater());
    }

    let onMessageChange = (message) => {
        let action = updateNewMessageTextActionCreater(message)
        props.store.dispatch(action)
    }
    return (
        <Dialog updateNewMessageText={onMessageChange} addMessage={addMessage}
            dialogData={state.dialogPage.dialogData}
            messages={state.dialogPage.messageData}
            messageText={state.dialogPage.messageText}
        />
    )
}

export default DialogContainer;
