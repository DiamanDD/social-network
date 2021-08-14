import React from "react";
import {Profile} from "./Profile";
import {Store} from "redux";
import {addPostActionCreator, UpdPostActionCreator} from "../../redux/dialogs-reducer";

export type PostsPropsType = {
    store: Store
}
export const ProfileContainer = (props: PostsPropsType) => {
    let state = props.store.getState()
    const onclickAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onChangePostElements = (body: string) => {
        return props.store.dispatch(UpdPostActionCreator(body))
    }
    return (
        <>
            <Profile
                posts={state.dialogsReducer.profilePage.posts}
                newPost={state.dialogsReducer.profilePage.newPost}
                onclickAddPost={onclickAddPost}
                onChangePostElements={onChangePostElements}/>
        </>
    )
}