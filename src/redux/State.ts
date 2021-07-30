import {PostsType, StateTypeElement} from "../types/type";
import {rerenderEntireThree} from "../render";
import {ChangeEvent} from "react";


export let State: StateTypeElement = {
    profilePage: {
        profile: [
            {id: 1, userName: "Ivan"},
            {id: 2, userName: "Ivan2"},
            {id: 3, userName: "Ivan3"}
        ],

        message: [
            {id: 1, message: "hallo1"},
            {id: 2, message: "hallo2"},
            {id: 3, message: "hallo3"}
        ]


    },

    posts: [
        {id: 1, message: "Привет я Маша", likesCount: 12},
        {id: 2, message: "ПИВЕТ Привет", likesCount: 15},
        {id: 3, message: "куку", likesCount: 18},
        {id: 4, message: "ПИВЕТ Привет", likesCount: 15},
        {id: 5, message: "куку", likesCount: 18},
        {id: 6, message: "ПИВЕТ Привет", likesCount: 15},
        {id: 7, message: "куку", likesCount: 18}
    ]
}


export const addPostMessage = (posText: string) => {
    const newpost: PostsType = {
        id: new Date().getTime(),
        message: posText,
        likesCount: 0
    }
    State.posts.push(newpost)
    console.log(State.posts)
    rerenderEntireThree(State)
}
export const onChangePostElements=(e:ChangeEvent<HTMLTextAreaElement>)=>{
    console.log(e.currentTarget.value)
}