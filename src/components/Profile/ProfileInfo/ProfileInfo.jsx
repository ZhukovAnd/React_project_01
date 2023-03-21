import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../AssistantsComponent/Preloader/Preloader';
import profilePhoto from './../../../assets/images/profilePhoto.jpg'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
    return  <Preloader />
    }
    return (
        <div className={style.content}>
            {/* <div className='content_img'>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt="img_content" />
            </div> */}
            <div>
                <img src={props.profile.photos.large != null
                ? props.profile.photos.large
                : profilePhoto
                } alt='Avatar' />
            </div>
            <ProfileStatus status="Hello my friends!"/>
            <div className={style.profileInfo}>
                <div>Меня зовут: <span> {props.profile.fullName}</span></div>
                <div>Обо мне: <span> {props.profile.aboutMe}</span></div>
            </div>
        </div>
    )
}

export default ProfileInfo