import { myRender } from './../render';


const state = {
  profilePage: {
    mypostData: [
      { id: "1", message: "эй, как дела" },
      { id: "2", message: "Это мой второй пост" },
      { id: "3", message: "Это мой третий пост" },
      { id: "4", message: "Мне нравиться React" }
    ]
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
    ]
  }
}

export let addPost = (text) => {
  let addText = {
    id: 5,
    message: text
  }
  state.profilePage.mypostData.push(addText)
  myRender(state)
}



export default state
