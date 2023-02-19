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
  addPost() {
    let addText = {
      id: 5,
      message: this._state.profilePage.myPostText
    }
    this._state.profilePage.mypostData.push(addText)
    this._state.profilePage.myPostText = '';
this._callSubscraiber(this._state)
  },
  upduteNewPostText(newText) {
    this._state.profilePage.myPostText = newText
    this._callSubscraiber(this._state)
  },
  addMessage(text) {
    let addMessage = {
      id: 10,
      message: this._state.dialogPage.messageText
    }
    this._state.dialogPage.messageData.push(addMessage)
    this._state.dialogPage.messageText = '';
    this._callSubscraiber(this._state)
  },
  updateNewMessageText(newMessage) {
    this._state.dialogPage.messageText = newMessage
    this._callSubscraiber(this._state)
  },
  subscrabe(observer) { //наблюдатель
    this._callSubscraiber = observer;
  }

}

window.state = store


export default store
