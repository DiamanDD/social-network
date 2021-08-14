import React from "react";
import style from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {PostsType} from "../../types/type";

export type PostsPropsType = {
    posts: PostsType[]
    newPost: string
    onclickAddPost: () => void
    onChangePostElements: (body: string) => void

}
export const Profile = (props: PostsPropsType) => {

    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.posts}
                newPost={props.newPost}
                onclickAddPost={props.onclickAddPost}
                onChangePostElements={props.onChangePostElements}
            />
        </div>
    )
}