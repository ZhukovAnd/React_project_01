import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer'
import StoreContext from '../../../redux/StoreContext';
import store from '../../../redux/reduxStore';



const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer> 
        {(store) => {
            let state = store.getState()
            let addPost = () => {
        store.dispatch(addPostActionCreater());
    }
            let onPostChange = (text) => {
                 let action = updateNewPostTextActionCreater(text)
              store.dispatch(action)
    }
   return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                posts={state.profilePage.mypostData}
                myPostText={state.profilePage.myPostText}
        />)}
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer