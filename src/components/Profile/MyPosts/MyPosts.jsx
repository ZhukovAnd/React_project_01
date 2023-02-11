import React from 'react';
import Post from './MyPost/Post';
import style from './MyPosts.module.css'

const MyPosts = (props) => {

    let posts = props.mypostData.map(postEl => <Post message={postEl.message} />)
    return (
        <div className={style.content}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Добавить пост</button>
                <h3> Мои посты</h3>
                <div className={style.postContent}>
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default MyPosts