const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let addText = {
        id: 5,
        message: state.myPostText
      }
      state.mypostData.push(addText)
      state.myPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.myPostText = action.newText
      return state;
    default: return state;
  }
}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;