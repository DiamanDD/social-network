import React from "react";
import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../types/type";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileInfoHook} from "./ProfileInfo/ProfileInfoHook";

export type PostsPropsType = {
    posts: PostsType[]
    addPost: (value:string) => void
    setProfileInfo: (setProfileInfo: any) => void
    profiliInfo: any
    profileStatus:string
    updStatusThunkCreator:(status:string)=>void
}
export const Profile = (props: PostsPropsType) => {

    return (
        <div className={style.content}>
            {props.profiliInfo
                ? <ProfileInfoHook profiliInfo={props.profiliInfo } profileStatus={props.profileStatus} updStatusThunkCreator={props.updStatusThunkCreator}/>
                : <Preloader/>
            }
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
            />
        </div>
    )
}