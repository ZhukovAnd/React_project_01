import React from "react";
import { addMessageActionCreater } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogPage.dialogData,
        messages: state.dialogPage.messageData,
        // messageText: state.dialogPage.messageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreater(newMessageBody))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialog) // оборачиваем в функции обработчики в композе с низу в верх
