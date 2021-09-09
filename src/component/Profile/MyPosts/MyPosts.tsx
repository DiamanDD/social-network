import React, {ChangeEvent} from "react";
import {Posts} from "./Posts/Posts";
import {PostsType} from "../../../types/type";


type MyPostsType = {
    posts: PostsType[]
    newPost: string
    addPost: () => void
    UpdPost: (body: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map((p) => <Posts
        key={p.id}
        message={p.message}
        likes={p.likesCount}

    />)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onclickAddPost = () => {
        props.addPost()

    }

    const onChangePostElements = (e: ChangeEvent<HTMLTextAreaElement>) => {

        return props.UpdPost(e.currentTarget.value)

    }
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement}
                              onChange={onChangePostElements}
                              value={props.newPost}>
                    </textarea>
                    <button onClick={onclickAddPost}>ADD Post</button>
                </div>
            </div>
            {postElements}

        </div>

    )
}