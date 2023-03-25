import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../AssistantsComponent/FormControl/FormsControls';
import Post from './MyPost/Post';
import style from './MyPosts.module.css'

const MyPosts = (props) => {  
    let postsElements = props.mypostData.map(postEl => <Post message={postEl.message} />)
  
    let addNewPost = (value) => {
        props.addPost(value.newMyPost);
    }

    return (
        <div className={style.content}>
            <div>
               <AddMyPostFormRedux onSubmit={addNewPost} /> 
                <h3> Мои посты</h3>
                <div className={style.postContent}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

const AddMyPost = (props) => {
let maxLength = maxLengthCreator(10)
    return (
        <form onSubmit={props.handleSubmit} >
         <div>               
              <Field component={Textarea} 
                        name="newMyPost"
                        placeholder="Создать новый пост..."
                        validate={[requiredField, maxLength]} />  
                </div>
                <button>Добавить пост</button>  
        </form>
    )
}
const AddMyPostFormRedux = reduxForm({form: "myPostAddForm"})(AddMyPost)

export default MyPosts;