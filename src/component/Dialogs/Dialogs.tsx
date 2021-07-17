import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs=()=>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}><NavLink to="/dialogs/2">Ivan</NavLink></div>
                <div className={s.dialog+ " "+ s.active}><NavLink to="/dialogs/3">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/4">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/5">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/6">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/7">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/8">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/9">Ivan</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/10">Ivan</NavLink></div>
              </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Privet</div>
            </div>




        </div>
    )
}