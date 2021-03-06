import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"

type HeaderPropsType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    LogOutThunkCreator: () => void
}
export const Header = (props: HeaderPropsType) => {


    return (
        <header className={style.header}>
            <img className={"imgNav"}
                 src={"https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"} alt={"ava"}/>
            <div className={style.authorized}>
                {
                    props.isAuth ?
                        <NavLink  to={`/profile/${props.id}`}>
                           <div>{props.login}</div>
                            <div><button onClick={props.LogOutThunkCreator}>Выход</button></div>
                        </NavLink>
                        : <NavLink to={"/login"}>
                            Login
                        </NavLink>
                }

            </div>
        </header>
    )
}