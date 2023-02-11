import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYylrIORqVocCKuFL2M1wuFuUr7KTY-rqP_Q&usqp=CAU' alt='Avatar' />
           <span>{props.message}</span>
        </div>
    )
}

export default Post