import React from "react";
import style from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {
let newMessageElement = React.createRef();
let addMessage = () =>{
  let message = newMessageElement.current.value;
  alert(message)  
}


    let dialog_elem = props.dialogsData.dialogData.map(el => {
        return <DialogItem name={el.name} id={el.id} />
    })
    let messageElem = props.dialogsData.messageData.map(mess => {
        return <Message message={mess.message} id={mess.id} />
    })

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
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>

    )
}

export default Dialog
