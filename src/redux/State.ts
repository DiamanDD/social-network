import {PostsType, StateTypeElement} from "../types/type";

let rerenderEntireThree=(State:StateTypeElement)=>{

}

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
    ],
    newPost: ""
}


export const addPostMessage = () => {
    const newpost: PostsType = {
        id: new Date().getTime(),
        message: State.newPost,
        likesCount: 0
    }
    if (State.newPost) {
        State.posts.push(newpost)
        rerenderEntireThree(State)
        State.newPost = ""

    }
}

export const updPostMessage = (updText: string) => {
    State.newPost = updText
    rerenderEntireThree(State)

}

export const subscribe=(observe:any)=>{
rerenderEntireThree=observe
}