import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";



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

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._callSubscraiber(this._state)

  } // end dispatch

} //end store






window.state = store


export default store
