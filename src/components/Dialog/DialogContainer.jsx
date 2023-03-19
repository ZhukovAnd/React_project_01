import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
let AuthRedirectComponent = withAuthRedirect(Dialog)

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogContainer;
