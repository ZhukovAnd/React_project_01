import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { Textarea } from "../AssistantsComponent/FormControl/FormsControls";
import style from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {

    let dialog_elem = props.dialogData.map(el => {
        return <DialogItem name={el.name} id={el.id} />
    })
    let messageElem = props.messages.map(mess => {
        return <Message message={mess.message} id={mess.id} />
    })

    let addNewMessage = (value) => {
        props.addMessage(value.newMessageBody)
    }
    if (!props.isAuth) return <Navigate to='/login' />

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialog_elem}
                </div>
                <div className={style.messages}>
                    {messageElem}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {
    let maxLength = maxLengthCreator(10)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                validate={[requiredField, maxLength ]}
                    name="newMessageBody"
                    placeholder="Введите ваше сообщение..." />
            </div>
            <div>
                <button>Отправить...</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialog
