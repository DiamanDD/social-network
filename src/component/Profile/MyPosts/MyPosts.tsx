import React from "react";
import s from "../Profile.module.css";
import {Posts} from "./Posts/Posts";


export const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>ADD Post</button>
                </div>
            </div>
            <Posts message={"Привет я Маша"} likes={10}/>
            <Posts message={"Привет я Вова"} likes={23}/>
            <Posts message={"Привет я Степа"} likes={12}/>

        </div>

    )
}