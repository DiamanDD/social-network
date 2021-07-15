import React from "react";
import s from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.items}>
                <a>Profile</a>
            </div>
            <div className={`${s.items} ${s.gold}`}>
                <a>Message</a>
            </div>
            <div className={s.items}>
                <a>News</a>
            </div>

            <div className={s.items}>
                <a>Musics</a>
            </div>
            <div className={s.items}>
                <a>Settings</a>
            </div>

        </nav>
    )
}