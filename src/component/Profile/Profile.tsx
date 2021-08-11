import React from "react";
import s from "./Profile.module.css"

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";
import {ActionsType, PostsType} from "../../types/type";


export type PostsPropsType = {
    posts: PostsType[]

    newPost: string
    dispatch: (action: ActionsType) => void

}

export const Profile = (props: PostsPropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                dispatch={props.dispatch}
                newPost={props.newPost}
            />


        </div>
    )
}