import React from "react";
import style from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../types/type";
import {Preloader} from "../../Common/Preloader/Preloader";

export type PostsPropsType = {
    posts: PostsType[]
    newPost: string
    addPost: () => void
    UpdPost: (body: string) => void
    setProfileInfo: (setProfileInfo: any) => void
    profiliInfo: any
}
export const Profile = (props: PostsPropsType) => {
    return (
        <div className={style.content}>
            {props.profiliInfo ? <ProfileInfo
                profiliInfo={props.profiliInfo}
            /> : <Preloader/>
            }
            <MyPosts
                posts={props.posts}
                newPost={props.newPost}
                addPost={props.addPost}
                UpdPost={props.UpdPost}
            />
        </div>
    )
}