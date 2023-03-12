import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/images.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "38187832-a5c3-46c6-924f-7067da4bf899"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                });
                        }} >отписаться</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "38187832-a5c3-46c6-924f-7067da4bf899"
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
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