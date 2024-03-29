import { userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let init_state = {
  mypostData: [
    { id: "1", message: "эй, как дела" },
    { id: "2", message: "Это мой второй пост" },
    { id: "3", message: "Это мой третий пост" },
    { id: "4", message: "Мне нравиться React" }
  ],
  myPostText: 'IT-Camasutra.com',
  profile: null,
  status: ""
}

const profileReducer = (state = init_state, action) => {
  switch (action.type) {
    case ADD_POST:
      let addText = {
        id: 5,
        message: action.newMyPost
      }
      return { ...state, mypostData: [...state.mypostData, addText], myPostText: '' }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }

    case SET_STATUS:
        return { ...state, status: action.status }

    default: return state;
  }
}
// Экшн криэйтеры
export const addPostActionCreater = (newMyPost) => ({ type: ADD_POST, newMyPost})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setProfileStatusAC = (status) => ({type: SET_STATUS, status})

// Thunk - санки
export const getUserProfile = (profileId) => (dispatch) => {
  userAPI.getProfile(profileId)
    .then(data => {
      dispatch(setUserProfile(data))
    })
}
export const getProfileStatus = (profileId) => (dispatch) => {
  userAPI.getStatus(profileId)
  .then(data => {
    dispatch(setProfileStatusAC(data))
  })
}
export const updateProfileStatus = (status) => (dispatch) => {
  userAPI.updateStatus(status)
  .then(data => {
    if(data.resultCode === 0) {
    dispatch(setProfileStatusAC(status))
    }
  })
}


export default profileReducer;