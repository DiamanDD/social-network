import React, {ChangeEvent} from "react";
import s from "./Profile.module.css"

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../types/type";
import {updPostMessage} from "../../redux/State";

export type PostsPropsType = {
    posts: PostsType[]
    addPost: () => void
    updPost:(updText:string)=>void
    newPost:string

}

export const Profile = (props: PostsPropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
                updPost={updPostMessage}
                newPost={props.newPost}
            />
            {/*<MyPosts posts={props.posts} />*/}

        </div>
    )
}