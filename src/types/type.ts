// типизация

import {addPostActionCreator, UpdPostActionCreator} from "../redux/State";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type MessageType = {
    id: number
    message: string
}

export type ProfileType = {
    id: number
    userName: string
}

export type profilePageTypeElevents = {
    profile: ProfileType[]
    message: MessageType[]

}


export type StateTypeElement = {
    profilePage: profilePageTypeElevents
    posts: PostsType[]
    newPost:string

}


export type StateType = {
    store: storeType
}

export type AddPostType=ReturnType<typeof addPostActionCreator>

export  type UpdPostType=ReturnType<typeof UpdPostActionCreator>

export type ActionsType=AddPostType | UpdPostType

export type storeType= {
    _state:StateTypeElement

    subscribe:(observe:()=>void)=>void
    _rerenderEntireThree:()=>void
    getState:()=>StateTypeElement
    dispatch:(action:ActionsType)=>void

}

