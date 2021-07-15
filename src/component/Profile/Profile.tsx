import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"/>
            </div>
            <div>
                <div>
                    {/*<img*/}
                    {/*    src={"https://st2.depositphotos.com/1972501/11226/v/600/depositphotos_112267480-stock-illustration-cute-cat-vector-logo.jpg"}/>*/}
                    ava+description
                </div>

            </div>
            <MyPosts/>

        </div>
    )
}