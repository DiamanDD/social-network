import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Header.module.css"

type HeaderPropsType={
    id:number |null
    email:string |null
    login:string |null
    isAyth:boolean
}
export const Header = (props:HeaderPropsType) => {


    return (
        <header className={style.header}>
            <img className={"imgNav"}
                 src={"https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"} alt={"ava"}/>
            <div className={style.authorized}>
                {
                    props.isAyth?
                        <NavLink to={"/profile/2}"}>
                            {props.login}
                        </NavLink>
                        : <NavLink to={"/mylogin"}>
                        Login
                    </NavLink>
                }

            </div>
        </header>
    )
}