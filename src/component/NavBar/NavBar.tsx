import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.items}>
                <NavLink to={"/profile"} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.items} ${s.gold}`}>
                <NavLink to={"/dialogs"} activeClassName={s.activeLink}>Dialogs</NavLink>
            </div>
            <div className={s.items}>
                <NavLink to={"/news"} activeClassName={s.activeLink}>News</NavLink>
            </div>

            <div className={s.items}>
                <NavLink to={"/musics"} activeClassName={s.activeLink}>Musics</NavLink>
            </div>
            <div className={s.items}>
                <NavLink to={"/settings"} activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.items}>
                <NavLink to={"/users"} activeClassName={s.activeLink}>Users</NavLink>
            </div>

        </nav>
    )
}