const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let init_state = {
  dialogData: [
    { name: "Андрей", id: "1" },
    { name: "Сергей", id: "2" },
    { name: "Василий", id: "3" }
  ],
  messageData: [
    { message: "Привет!", id: "1" },
    { message: "Как твои дела?", id: "2" },
    { message: "Ура! Всё получилось", id: "3" },
  ],
  messageText: ''
} 


const dialogReducer = (state = init_state, action) => {//аргументы в строгом порядке
  switch (action.type) {
    case ADD_MESSAGE:
      let addMessage = {
        id: 10,
        message: state.messageText
      }
      state.messageData.push(addMessage)
      state.messageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.messageText = action.newMessage;
      return state;
    default: return state
  }
}
export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreater = (message) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message })


export default dialogReducer;