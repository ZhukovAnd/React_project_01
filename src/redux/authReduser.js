import { userAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let init_state = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = init_state, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default: return state
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const getAuthUserData = () => (dispatch) => {
  userAPI.getAuth()
    .then(data => {
      let { id, email, login } = data;
      dispatch(setAuthUserData(id, email, login));
    })
}


export default authReducer;