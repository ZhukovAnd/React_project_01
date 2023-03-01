const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let init_state = {
  mypostData: [
    { id: "1", message: "эй, как дела" },
    { id: "2", message: "Это мой второй пост" },
    { id: "3", message: "Это мой третий пост" },
    { id: "4", message: "Мне нравиться React" }
  ],
  myPostText: 'IT-Camasutra.com'
}

const profileReducer = (state = init_state, action) => {
  switch (action.type) {
    case ADD_POST: {
      let addText = {
        id: 5,
        message: state.myPostText
      }
      let stateCopy = {...state};
      stateCopy.mypostData = [...state.mypostData]
      stateCopy.mypostData.push(addText)
      stateCopy.myPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.myPostText = action.newText
      return stateCopy;
    }
    default: return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;