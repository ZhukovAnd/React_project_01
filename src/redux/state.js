
let myRender = () => {
  console.log("Change app")
}

const state = {
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
}
window.state = state

export let addPost = (text) => {
  let addText = {
    id: 5,
    message: state.profilePage.myPostText
  }
  state.profilePage.mypostData.push(addText)
  state.profilePage.myPostText = '';
  myRender(state)
}
export let upduteNewPostText = (newText) => {
  state.profilePage.myPostText = newText
  myRender(state)
}
// end my posts
export let addMessage = (text) => {
  let addMessage = {
    id: 10,
    message: state.dialogPage.messageText
  }
  state.dialogPage.messageData.push(addMessage)
  state.dialogPage.messageText = '';
  myRender(state)
}
//end app message
export let updateNewMessageText = (newMessage) => {
  state.dialogPage.messageText = newMessage
  myRender(state)
}
//end dialog messages
export const subscrabe = (observer) => { //наблюдатель
  myRender = observer;
}

export default state
