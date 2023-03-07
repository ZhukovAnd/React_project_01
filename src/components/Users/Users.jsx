import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/images.png'


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
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} alt="Avatar" />
                    </div>
                    <div>{u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }} >отписаться</button>
                        : <button onClick={() => { props.follow(u.id) }} >подписаться</button>
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