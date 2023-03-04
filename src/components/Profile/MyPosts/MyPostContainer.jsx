import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer'
import { connect } from "react-redux";

    let mapStateToProps = (state) => {
        return {
            mypostData: state.profilePage.mypostData,
            myPostText: state.profilePage.myPostText
        }
    }
 
    let mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostActionCreater());
            },
            onPostChange: (text) => {
                dispatch(updateNewPostTextActionCreater(text))
            }
        }
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

    export default MyPostsContainer