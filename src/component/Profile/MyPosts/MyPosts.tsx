import React from "react";
import {Posts} from "./Posts/Posts";
import {PostsType} from "../../../types/type";
import {AddMessageFormContainer} from "../../../Common/MessageForm/AddMessageFormContainer";


type MyPostsType = {
    posts: PostsType[]
    addPost: (value:string) => void
}
export const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map((p) => <Posts
        key={p.id}
        message={p.message}
        likes={p.likesCount}
    />)

    const newPost=(value:any)=>{
        console.log((value.messageBody));
        props.addPost(value.messageBody)
    }
    return (
        <div>
            <div>
                My posts
                <div>

                    <AddMessageFormContainer onSubmit={newPost}/>
                </div>
            </div>
            {postElements}

        </div>

    )
}