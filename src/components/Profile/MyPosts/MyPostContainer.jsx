import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreater } from '../../../redux/profileReducer'
import { connect } from "react-redux";

    let mapStateToProps = (state) => {
        return {
            mypostData: state.profilePage.mypostData,
            myPostText: state.profilePage.myPostText
        }
    }
 
    let mapDispatchToProps = {
            addPost: addPostActionCreater       
        
    }

    const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

    export default MyPostsContainer