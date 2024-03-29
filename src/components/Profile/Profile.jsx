import React from 'react';
import MyPostsContainer from './MyPosts/MyPostContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={style.content}>
            <ProfileInfo profile={props.profile} 
            status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile