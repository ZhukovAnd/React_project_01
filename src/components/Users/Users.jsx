import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

if(props.users.length === 0) {
    props.setUsers([
        { id: "1", fullName: "Андрей", photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77J2zptN4syr9RQF3D9TlnxTlejfDMRIjgQ&usqp=CAU',
        followed: true, status: "Я учу ReactJS", location: {city: "Н. Новгород", country: "Россия"} },
        { id: "2", fullName: "Василий", photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEf6q6w-L7zbe-bzF1NjxhNLYgf75eNCqgZDzvKz5i7UcQncYuV5w86n9Jq5-mlbWUqy8&usqp=CAU',
        followed: true, status: "Я учу только JS", location: {city: "Воронеж", country: "Россия"} },
        { id: "3", fullName: "Дмитрий", photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6OvFyfXV0svf76GmFpNJlF6dujkLlOym8Q&usqp=CAU',
        followed: true, status: "Я ни чего не учу, но всё знаю!", location: {city: "Москва", country: "Россия"} },
        { id: "4", fullName: "Сергей", photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcLaCtoNMapvv9NdXzqONPXSCoX9Sk8aEQA&usqp=CAU',
        followed: true, status: "Я специалист по 1С", location: {city: "Казань", country: "Россия"} }
    ])
}


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} />
                    </div>
                    <div>{ u.followed
                            ?<button onClick={ () => { props.unfollow(u.id) } } >отписаться</button>
                            :<button onClick={ () => { props.follow(u.id) } } >подписаться</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}
export default Users;