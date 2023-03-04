import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Nav.module.css'

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to='/profile'> Профиль </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}> Сообщения </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}> Пользователи </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news'> Новости </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music'> Музыка </NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/sitting'> Настройки </NavLink>
            </div>

        </nav>

    )
}

export default Nav