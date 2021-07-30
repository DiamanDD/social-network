import React from "react";
import {PostsPropsType} from "../Profile";

import {Posts} from "./Posts/Posts";
import {log} from "util";
import { ChangeEvent } from "react";


export const MyPosts = (props: PostsPropsType) => {


    let postElements = props.posts.map((p) => <Posts
        key={p.id}
        message={p.message}
        likes={p.likesCount}

    />)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onclickAddPost = () => {
        let text = newPostElement.current?.value

        text && props.addPost(text)
        if (newPostElement.current) newPostElement.current.value=""


    }
const onChangeCl=()=>{
    // props.onchangeClick()
    return ""
}

type valueMessage={
        props:()=>void
}
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement} onChange={onChangeCl} ></textarea>
                    <button onClick={onclickAddPost}>ADD Post</button>
                </div>
            </div>
            {postElements}


        </div>

    )
}