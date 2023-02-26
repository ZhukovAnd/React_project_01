import React from 'react';
import Post from './MyPost/Post';
import style from './MyPosts.module.css'




const MyPosts = (props) => {
   
    let postsElements = props.posts.map(postEl => <Post message={postEl.message} />)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={style.content}>
            <div>
                <div>               
                    <textarea onChange={onPostChange}
                        ref={newPostElement} value={props.myPostText} />
                </div>
                <button onClick={onAddPost}>Добавить пост</button>
                <h3> Мои посты</h3>
                <div className={style.postContent}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;