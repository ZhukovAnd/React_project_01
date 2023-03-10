const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let init_state = {
  mypostData: [
    { id: "1", message: "эй, как дела" },
    { id: "2", message: "Это мой второй пост" },
    { id: "3", message: "Это мой третий пост" },
    { id: "4", message: "Мне нравиться React" }
  ],
  myPostText: 'IT-Camasutra.com',
  profile: null
}

const profileReducer = (state = init_state, action) => {
  switch (action.type) {
    case ADD_POST:
      let addText = {
        id: 5,
        message: state.myPostText
      }
      return { ...state, mypostData: [...state.mypostData, addText], myPostText: '' }

    case UPDATE_NEW_POST_TEXT:
      return { ...state, myPostText: action.newText }

    case SET_USER_PROFILE: 
      return {...state, profile: action.profile}  

    default: return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;