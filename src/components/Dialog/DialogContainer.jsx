import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,
        messageText: state.dialogPage.messageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreater())
        },
        onMessageChange: (message) => {
            dispatch(updateNewMessageTextActionCreater(message))
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;
