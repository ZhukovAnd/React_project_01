import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/images.png'
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p) => {
                return <span className={props.currentPage === p && style.selectedPage}
                    onClick={(e) => {
                        props.onChangePage(p)
                    }} > {p} </span>
            }
            )}
        </div>
        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <div>
                        <NavLink to={'./../profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} alt="Avatar" />
                        </NavLink>
                    </div>
                    <div>{u.followed
                        ? <button disabled={props.followingProgress} onClick={() => {                         
                            props.toggleFollowingProgress(true)
                            userAPI.unfollowUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                            props.toggleFollowingProgress(false)
                                });
                        }} >отписаться</button>

                        : <button disabled={props.followingProgress} onClick={() => {
                            props.toggleFollowingProgress(true)
                            userAPI.followUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                            props.toggleFollowingProgress(false)
                                });
                        }} >подписаться</button>

                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </div>)
        }
    </div>
}




export default Users;