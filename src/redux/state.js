const state = {
    profilePage: {
         mypostData: [
            { message: "эй, как дела", id: "1" },
            { message: "Это мой второй пост", id: "2" },
            { message: "Это мой третий пост", id: "3" },
            { message: "Мне нравиться React", id: "4" }
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

export const addPost = (text) => {
  state.profilePage.mypostData.push(text)
}




export default state
