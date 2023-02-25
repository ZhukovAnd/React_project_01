import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../redux/dialogReducer";
import style from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {
   
        let dialog_elem = props.dialogsData.dialogData.map(el => {
        return <DialogItem name={el.name} id={el.id} />
    })
        let messageElem = props.dialogsData.messageData.map(mess => {
        return <Message message={mess.message} id={mess.id} />
    })
    let newMessageElement = React.createRef();

let addMessage = () =>{  
  props.dispatch(addMessageActionCreater());
}

let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreater(message))
}
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
                 ref={newMessageElement} value={props.dialogsData.messageText} />
            </div>
            <div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialog
