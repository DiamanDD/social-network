import React from "react";
import {PostsPropsType} from "../Profile";

import {Posts} from "./Posts/Posts";



export const MyPosts = (props:PostsPropsType) => {


    let postElements=props.posts.map((p)=>  <Posts key={p.id} message={p.message} likes={p.likesCount}/> )
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>ADD Post</button>
                </div>
            </div>
            {postElements}


        </div>

    )
}