import React, {ChangeEvent} from "react";
import {PostsPropsType} from "../Profile";

import {Posts} from "./Posts/Posts";
import {addPostActionCreator, UpdPostActionCreator} from "../../../redux/dialogs-reducer";


export const MyPosts = (props: PostsPropsType) => {

    let postElements = props.posts.map((p) => <Posts
        key={p.id}
        message={p.message}
        likes={p.likesCount}

    />)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onclickAddPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onChangePostElements = (e: ChangeEvent<HTMLTextAreaElement>) => {

        return props.dispatch(UpdPostActionCreator(e.currentTarget.value))
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