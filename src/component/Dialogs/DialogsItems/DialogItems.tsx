import s from "./DialogsItems.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

type UserProfileProps = {
    id: number
    route: number
    userName: string

}
export const DialogItems = (user: UserProfileProps) => {
    return (
        <div key={user.id} className={s.dialog}><NavLink
            to={`/dialogs/${user.route}`}>{user.userName}.</NavLink>
        </div>
    )

}