import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.content}>
            <div className='content_img'>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt="img_content" />
            </div>
            <div>
                Ava + profile
            </div>
        </div>
    )
}

export default ProfileInfo