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
 
    let mapDispatchToProps = {
            addPost: addPostActionCreater,
            onPostChange: updateNewPostTextActionCreater
            
        
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

    export default MyPostsContainer