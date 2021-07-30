import React, {ChangeEvent} from "react";
import s from "./Profile.module.css"

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../types/type";

export type PostsPropsType = {
    posts: PostsType[]
    addPost: (PostText: string) => void
    onchangeClick:(e:ChangeEvent<HTMLTextAreaElement>)=>void
}

export const Profile = (props: PostsPropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} onchangeClick={props.onchangeClick}/>
            {/*<MyPosts posts={props.posts} />*/}

        </div>
    )
}