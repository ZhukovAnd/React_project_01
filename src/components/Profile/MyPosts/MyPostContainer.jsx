import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer'



const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost}
            posts={state.profilePage.mypostData}
            myPostText={state.profilePage.myPostText}
        />
    )
}

export default MyPostsContainer