import React from "react";
import { Navigate } from "react-router-dom";
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
    let newMessageElement = React.createRef();

let onAddMessage = () =>{  
  props.addMessage();
}

let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.onMessageChange(message)
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
            <div>
                <textarea onChange={onMessageChange}
                 ref={newMessageElement} value={props.messageText} />
            </div>
            <div>
                <button onClick={onAddMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialog
