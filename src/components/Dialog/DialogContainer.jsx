import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import StoreContext from "../../redux/StoreContext";

const DialogContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let addMessage = () => {
                    store.dispatch(addMessageActionCreater());
                }
                let onMessageChange = (message) => {
                    let action = updateNewMessageTextActionCreater(message)
                    store.dispatch(action)
                }
                return (
                    <Dialog updateNewMessageText={onMessageChange}
                        addMessage={addMessage}
                        dialogData={state.dialogPage.dialogData}
                        messages={state.dialogPage.messageData}
                        messageText={state.dialogPage.messageText}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}
export default DialogContainer;
