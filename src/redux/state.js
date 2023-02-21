const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {

  _state: {
    profilePage: {
      mypostData: [
        { id: "1", message: "эй, как дела" },
        { id: "2", message: "Это мой второй пост" },
        { id: "3", message: "Это мой третий пост" },
        { id: "4", message: "Мне нравиться React" }
      ],
      myPostText: ''
    },
    dialogPage: {
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
  },
  getState() {
    return this._state;
  },
  _callSubscraiber() { //функция переименованная из myRender
    console.log("Change app")
  },
  subscrabe(observer) { //наблюдатель
    this._callSubscraiber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let addText = {
        id: 5,
        message: this._state.profilePage.myPostText
      }
      this._state.profilePage.mypostData.push(addText)
      this._state.profilePage.myPostText = '';
      this._callSubscraiber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.myPostText = action.newText
      this._callSubscraiber(this._state)
    }
    else if (action.type === 'ADD-MESSAGE') {
      let addMessage = {
        id: 10,
        message: this._state.dialogPage.messageText
      }
      this._state.dialogPage.messageData.push(addMessage)
      this._state.dialogPage.messageText = '';
      this._callSubscraiber(this._state)
    }
    else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogPage.messageText = action.newMessage
      this._callSubscraiber(this._state)
    }

  } // end dispatch

} //end store






export const addPostActionCreater = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextActionCreater = (message) =>
  ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message })


window.state = store


export default store
