import React from "react";
import s from "./Profile.module.css"

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";
import { PostsType } from "../../types/type";

export type PostsPropsType={
    posts:PostsType[]
}

export const Profile = (props:PostsPropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts}  />

        </div>
    )
}