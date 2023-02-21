import React from 'react';
import Post from './MyPost/Post';
import style from './MyPosts.module.css'

import { addPostActionCreater } from '../../../redux/state';
import { updateNewPostTextActionCreater } from '../../../redux/state';


const MyPosts = (props) => {
   
    let postsElements = props.profileData.mypostData.map(postEl => <Post message={postEl.message} />)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreater(text))
    }

    return (
        <div className={style.content}>
            <div>
                <div>
               
                    <textarea onChange={onPostChange}
                        ref={newPostElement} value={props.profileData.myPostText} />
                </div>
                <button onClick={addPost}>Добавить пост</button>
                <h3> Мои посты</h3>
                <div className={style.postContent}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts