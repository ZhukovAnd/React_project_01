const ADD_MESSAGE = 'ADD-MESSAGE'

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
  ]
}

const dialogReducer = (state = init_state, action) => {//аргументы в строгом порядке
  switch (action.type) {
    case ADD_MESSAGE: {
      let addMessage = {
        id: 10,
        message: action.newMessageBody //messageText
      }
      return { ...state, messageData: [...state.messageData, addMessage] };
    }

    default: return state
  }
}
export const addMessageActionCreater = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })


export default dialogReducer;